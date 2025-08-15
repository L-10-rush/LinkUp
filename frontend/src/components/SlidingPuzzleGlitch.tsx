import { useRef, useEffect } from "react";

const SlidingPuzzleGlitch = ({
  glitchColors = ["#5e4491", "#A476FF", "#241a38"],
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);

  // --- Letter generation logic (adapted from previous component) ---
  const letters = useRef<{ char: string; color: string }[]>([]);
  const gridInfo = useRef({ columns: 0, rows: 0 });
  const fontSize = 14;
  const charWidth = 10;
  const charHeight = 18;
  const lettersAndSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*/<>";

  const getRandomChar = () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
  const getRandomColor = () => glitchColors[Math.floor(Math.random() * glitchColors.length)];

  // --- Puzzle logic ---
  const tiles = useRef<{
    sx: number; // Source X on the virtual letter canvas
    sy: number; // Source Y
    dx: number; // Destination X on the real canvas
    dy: number; // Destination Y
    currentX: number; // Animated X
    currentY: number; // Animated Y
    targetX: number;  // Target X for animation
    targetY: number;  // Target Y for animation
  }[]>([]);
  const TILE_COUNT = 3; // 3x3 grid

  // Function to initialize the grid of letters
  const initializeLetters = (width: number, height: number) => {
    gridInfo.current = {
      columns: Math.ceil(width / charWidth),
      rows: Math.ceil(height / charHeight),
    };
    const totalLetters = gridInfo.current.columns * gridInfo.current.rows;
    letters.current = Array.from({ length: totalLetters }, () => ({
      char: getRandomChar(),
      color: getRandomColor(),
    }));
  };

  // Function to draw the letters to an offscreen canvas (our texture)
  const createLetterTexture = (width: number, height: number) => {
    const offscreenCanvas = document.createElement("canvas");
    offscreenCanvas.width = width;
    offscreenCanvas.height = height;
    const ctx = offscreenCanvas.getContext("2d")!;
    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = "top";

    letters.current.forEach((letter, index) => {
      const x = (index % gridInfo.current.columns) * charWidth;
      const y = Math.floor(index / gridInfo.current.columns) * charHeight;
      ctx.fillStyle = letter.color;
      ctx.fillText(letter.char, x, y);
    });
    return offscreenCanvas;
  };

  // Function to set up the 3x3 puzzle tiles
  const initializeTiles = (width: number, height: number) => {
    const tileWidth = width / TILE_COUNT;
    const tileHeight = height / TILE_COUNT;
    tiles.current = [];
    for (let y = 0; y < TILE_COUNT; y++) {
      for (let x = 0; x < TILE_COUNT; x++) {
        const tile = {
          sx: x * tileWidth,
          sy: y * tileHeight,
          dx: x * tileWidth,
          dy: y * tileHeight,
          currentX: x * tileWidth,
          currentY: y * tileHeight,
          targetX: x * tileWidth,
          targetY: y * tileHeight,
        };
        tiles.current.push(tile);
      }
    }
  };

  // Main animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const { width, height } = canvas.getBoundingClientRect();

    // Create the texture with glitchy letters
    const letterTexture = createLetterTexture(width, height);
    const tileWidth = width / TILE_COUNT;
    const tileHeight = height / TILE_COUNT;

    ctx.clearRect(0, 0, width, height);

    let needsUpdate = false;
    tiles.current.forEach(tile => {
      // Animate tile position smoothly
      tile.currentX += (tile.targetX - tile.currentX) * 0.1;
      tile.currentY += (tile.targetY - tile.currentY) * 0.1;

      // Check if animation is still running
      if (Math.abs(tile.targetX - tile.currentX) > 0.1 || Math.abs(tile.targetY - tile.currentY) > 0.1) {
        needsUpdate = true;
      }

      // Draw the tile (a piece of the letter texture)
      ctx.drawImage(
        letterTexture,
        tile.sx,
        tile.sy,
        tileWidth,
        tileHeight,
        tile.currentX,
        tile.currentY,
        tileWidth,
        tileHeight
      );
    });
    
    // Continue animation if tiles are still moving
    if(needsUpdate){
      animationRef.current = requestAnimationFrame(animate);
    } else {
       // Once animation is finished, schedule the next glitch
       setTimeout(() => {
         glitchAndAnimate();
       }, 1000); // Wait 1 second before next glitch
    }
  };
  
  // Triggers a new glitch and starts the animation
  const glitchAndAnimate = () => {
     if(animationRef.current) cancelAnimationFrame(animationRef.current);
     
     // Randomly move one tile
     const tileIndex = Math.floor(Math.random() * tiles.current.length);
     const moveX = (Math.random() - 0.5) * 40; // Random horizontal move
     const moveY = (Math.random() - 0.5) * 40; // Random vertical move

     tiles.current[tileIndex].targetX = tiles.current[tileIndex].dx + moveX;
     tiles.current[tileIndex].targetY = tiles.current[tileIndex].dy + moveY;

     // After a short time, move it back
     setTimeout(() => {
        tiles.current[tileIndex].targetX = tiles.current[tileIndex].dx;
        tiles.current[tileIndex].targetY = tiles.current[tileIndex].dy;
     }, 300 + Math.random() * 500);

     animate();
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement!;
    const dpr = window.devicePixelRatio || 1;
    const rect = parent.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    initializeLetters(rect.width, rect.height);
    initializeTiles(rect.width, rect.height);
    
    glitchAndAnimate(); // Start the first animation

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="block w-full h-full" />;
};

export default SlidingPuzzleGlitch;
