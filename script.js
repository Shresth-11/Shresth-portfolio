document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     RETRO BOOT SEQUENCE LOADER
     ========================================================================== */
  const loader = document.getElementById('loader');
  const bootLogs = document.getElementById('boot-logs');
  
  if (loader && bootLogs) {
    const lines = Array.from(bootLogs.children);
    // Hide all logs initially
    lines.forEach(line => line.style.display = 'none');
    
    let currentLine = 0;
    
    // Animate lines printing step-by-step
    const printNextLine = () => {
      if (currentLine < lines.length) {
        lines[currentLine].style.display = 'block';
        currentLine++;
        setTimeout(printNextLine, 350);
      } else {
        // Complete Boot sequence, transition and dismiss loader
        setTimeout(() => {
          loader.classList.add('loaded');
          document.body.classList.remove('loading');
        }, 600);
      }
    };
    
    // Start printing
    setTimeout(printNextLine, 400);
  } else if (loader) {
    // Fallback if bootLogs element not present
    setTimeout(() => {
      loader.classList.add('loaded');
      document.body.classList.remove('loading');
    }, 2000);
  }

  /* ==========================================================================
     TELEMETRY & FOOTER SYSTEM
     ========================================================================== */
  
  // Active clock updates
  const telemetryClock = document.getElementById('telemetry-clock');
  if (telemetryClock) {
    setInterval(() => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      telemetryClock.textContent = formatter.format(new Date());
    }, 1000);
  }

  // Session Uptime counter
  const telemetryUptime = document.getElementById('telemetry-uptime');
  if (telemetryUptime) {
    let startSeconds = 0;
    setInterval(() => {
      startSeconds++;
      telemetryUptime.textContent = `${startSeconds}s`;
    }, 1000);
  }

  /* ==========================================================================
     ACCORDION SYSTEM (OPERATING PRINCIPLES)
     ========================================================================== */
  
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parent = trigger.parentElement;
      const isActive = parent.classList.contains('active');
      
      // Close all accordion items
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // If the clicked item was not active, open it
      if (!isActive) {
        parent.classList.add('active');
      }
    });
  });

  /* ==========================================================================
     INTERACTIVE TERMINAL COMMAND CONSOLE
     ========================================================================== */
  
  const terminalOutput = document.getElementById('terminal-output');
  const terminalInput = document.getElementById('terminal-input');
  const cmdButtons = document.querySelectorAll('.cmd-btn, .command-shortcuts button');
  
  const commands = {
    help: () => {
      return `Available Commands:
  - <span class="cmd-highlight">about</span>      : Read about my background and engineering core ethos.
  - <span class="cmd-highlight">projects</span>   : Output the ledger index of selected projects.
  - <span class="cmd-highlight">skills</span>     : Fetch the primary stack telemetry breakdown.
  - <span class="cmd-highlight">resume</span>     : Open the PDF resume document in a new window tab.
  - <span class="cmd-highlight">contact</span>    : Print communication channels and social links.
  - <span class="cmd-highlight">clear</span>      : Reset console and flush stdout.`;
    },
    about: () => {
      return `SHRESTH JAISWAL // FULL-STACK SOFTWARE DEVELOPER
--------------------------------------------------
- CSE Undergraduate at VIT Bhopal University (CGPA: 8.35).
- Experienced in building production-grade web systems across MERN stack and modern React ecosystem.
- Focused on clean state architectures, serverless integrations, and interface render speed profiling.`;
    },
    projects: () => {
      return `SELECTED PRODUCT LEDGER:
--------------------------------------------------
[001] Typemate Editor      :: Ghost-text predictive Rich text editor [React, CSS3]
[002] BlogSphere          :: Serverless blogging application [React, Redux, Appwrite]
[003] Wanderlust          :: Airbnb MERN stack app with RBAC [MongoDB, Express, React, Node]`;
    },
    skills: () => {
      return `STACK OVERVIEW TELEMETRY:
--------------------------------------------------
- Languages     :: JavaScript (ES6+), Java, C++, Python
- Frontend Core :: React.js, Next.js, Redux Toolkit, React Hook Form, TailwindCSS, React Router
- Databases/Ops :: Node.js, Express.js, FastAPI, MongoDB, MySQL, Firebase, Git, Docker, Postman`;
    },
    resume: () => {
      window.open('resume.pdf', '_blank');
      return `RESUME DOCUMENT PORTAL:
--------------------------------------------------
- Opening resume.pdf in a new window tab...
- If it did not open automatically, click: <a href="resume.pdf" target="_blank" class="cmd-highlight">resume.pdf ↗</a>`;
    },
    contact: () => {
      return `COMMUNICATION PORTS:
--------------------------------------------------
- Primary Mail  :: jaisshresth143@gmail.com
- GitHub        :: github.com/Shresth-11
- LinkedIn      :: linkedin.com/in/shresth-jaiswal`;
    }
  };

  const handleCommand = (cmdText) => {
    const trimmedCmd = cmdText.trim().toLowerCase();
    
    // Add input echo line
    const echoLine = document.createElement('div');
    echoLine.className = 'terminal-line';
    echoLine.innerHTML = `<span class="terminal-prompt">guest@shresth-os:~$</span> <span class="cmd-sys">${cmdText}</span>`;
    terminalOutput.appendChild(echoLine);
    
    if (trimmedCmd === '') {
      // do nothing
    } else if (trimmedCmd === 'clear') {
      terminalOutput.innerHTML = '';
    } else if (commands[trimmedCmd]) {
      const responseLine = document.createElement('div');
      responseLine.className = 'terminal-line';
      responseLine.innerHTML = commands[trimmedCmd]();
      terminalOutput.appendChild(responseLine);
    } else {
      const errorLine = document.createElement('div');
      errorLine.className = 'terminal-line';
      errorLine.innerHTML = `Command '<span class="cmd-highlight">${cmdText}</span>' not found. Type '<span class="cmd-highlight">help</span>' for a list of valid commands.`;
      terminalOutput.appendChild(errorLine);
    }
    
    // Scroll terminal body
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  };

  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = terminalInput.value;
        handleCommand(cmd);
        terminalInput.value = '';
      }
    });
  }

  // Click handler for shortcut speed dials
  cmdButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      handleCommand(cmd);
      if (terminalInput) {
        terminalInput.focus();
      }
    });
  });

  /* ==========================================================================
     INTERACTIVE CANVAS SKETCHPAD
     ========================================================================== */
  
  const canvas = document.getElementById('sketchpad');
  const container = document.getElementById('canvas-container');
  const colorBtns = document.querySelectorAll('.color-btn');
  const sizeBtns = document.querySelectorAll('.size-btn');
  const toolEraser = document.getElementById('tool-eraser');
  const toolGrid = document.getElementById('tool-grid');
  const toolClear = document.getElementById('tool-clear');
  
  if (canvas && container) {
    const ctx = canvas.getContext('2d');
    
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    
    let currentColor = '#ff3d14'; // Primary accent
    let currentSize = 4;
    let isEraser = false;
    
    // Canvas sizing setup
    const resizeCanvas = () => {
      // Store current contents to redraw after resize
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext('2d');
      tempCtx.drawImage(canvas, 0, 0);
      
      // Update canvas size matching styling boundaries
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      // Restore drawings
      ctx.drawImage(tempCanvas, 0, 0);
      
      // Reset stroke styles because canvas resize resets context state
      setupStroke();
    };
    
    const setupStroke = () => {
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.strokeStyle = isEraser ? '#ffffff' : currentColor; // Canvas matching bg color (white) for eraser
      ctx.lineWidth = currentSize;
    };
    
    // Initialize stroke parameters
    setupStroke();
    
    // Trigger on resize and page load
    window.addEventListener('resize', resizeCanvas);
    
    // Delay to let Layout finish rendering dimensions
    setTimeout(resizeCanvas, 100);

    // Coordinate parsing
    const getCoordinates = (e) => {
      const rect = canvas.getBoundingClientRect();
      
      if (e.touches && e.touches.length > 0) {
        // Mobile Touch Event coords
        return {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top
        };
      } else {
        // Mouse Event coords
        return {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
      }
    };
    
    // Drawing actions
    const startDrawing = (e) => {
      isDrawing = true;
      const coords = getCoordinates(e);
      lastX = coords.x;
      lastY = coords.y;
    };
    
    const draw = (e) => {
      if (!isDrawing) return;
      // Prevent default scrolling on mobile when drawing
      e.preventDefault();
      
      const coords = getCoordinates(e);
      setupStroke();
      
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(coords.x, coords.y);
      ctx.stroke();
      
      lastX = coords.x;
      lastY = coords.y;
    };
    
    const stopDrawing = () => {
      isDrawing = false;
    };
    
    // Event listeners for mice
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    // Event listeners for touch devices (mobiles/tablets)
    canvas.addEventListener('touchstart', startDrawing, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    canvas.addEventListener('touchend', stopDrawing);
    
    // Brush colors handler
    colorBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        isEraser = false;
        toolEraser.classList.remove('active');
        
        colorBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        currentColor = btn.getAttribute('data-color');
        setupStroke();
      });
    });
    
    // Brush size handler
    sizeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sizeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        currentSize = parseInt(btn.getAttribute('data-size'));
        setupStroke();
      });
    });
    
    // Eraser toggle
    if (toolEraser) {
      toolEraser.addEventListener('click', () => {
        isEraser = !isEraser;
        toolEraser.classList.toggle('active', isEraser);
        setupStroke();
      });
    }
    
    // Grid backgrounds toggler
    if (toolGrid) {
      toolGrid.addEventListener('click', () => {
        container.classList.toggle('grid-background');
        toolGrid.classList.toggle('active');
      });
    }
    
    // Clear whole canvas
    if (toolClear) {
      toolClear.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      });
    }
  }

});
