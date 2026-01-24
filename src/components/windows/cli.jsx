import './cli.scss'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'

const Cli = ({windowName , setWindowsState, x, y}) => {
  const commands = {
    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ')
    },
    portfolio: {
      description: 'Show portfolio details.',
      usage: 'portfolio',
      fn: () => `
╔═══════════════════════════════════════════════════════════════╗
║                    RUDRA N M - PORTFOLIO                      ║
║                    Full Stack Developer                       ║
╚═══════════════════════════════════════════════════════════════╝

┌─ ABOUT ─────────────────────────────────────────────────────┐
│ Passionate developer crafting elegant solutions with code    │
│ Location: India 🇮🇳                                            │
│ Email: rudra@example.com                                     │
│ GitHub: github.com/rudra                                     │
└──────────────────────────────────────────────────────────────┘

┌─ TECH STACK ────────────────────────────────────────────────┐
│ Frontend:  React ⚛️  | Next.js | TypeScript | TailwindCSS   │
│ Backend:   Node.js 🟢 | Express | Python 🐍 | Django       │
│ Cloud:     AWS ☁️  | Docker 🐳 | CI/CD                     │
│ Database:  MongoDB | PostgreSQL | Redis                     │
└─────────────────────────────────────────────────────────────┘

┌─ FEATURED PROJECTS ─────────────────────────────────────────┐
│                                                             │
│ 🖥️  MacPortfolio                                           │
│    → Interactive portfolio with macOS-inspired UI           │
│    → Tech: React, SCSS, Terminal Emulator                   │
│    → Status: ✅ Live                                       │
│                                                             │
│ 🛒 E-Commerce Platform                                     │
│    → Full-stack shopping solution with payments             │
│    → Tech: MERN Stack, Stripe, AWS S3                       │
│    → Status: ✅ Production                                  │
│                                                             │
│ 🎨 AI Image Generator                                       │
│    → AI-powered creative image generation tool              │
│    → Tech: Python, OpenAI API, React                        │
│    → Status: 🚧 Beta                                        │ 
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─ ACHIEVEMENTS ──────────────────────────────────────────────┐
│ ⭐ 500+ GitHub Stars                                        │
│ 🏆 Hackathon Winner 2024                                    │
│ 📝 10+ Open Source Contributions                            │
└─────────────────────────────────────────────────────────────┘

💡 Type 'contact' for ways to reach me
💡 Type 'projects' to see all projects
💡 Type 'skills' for detailed tech breakdown
`
    },
    contact: {
      description: 'Show contact information.',
      usage: 'contact',
      fn: () => `
┌─ GET IN TOUCH ─────────────────────────┐
│ 📧 Email:    rudra@example.com         │
│ 💼 LinkedIn: linkedin.com/in/rudra-nm  │
│ 🐙 GitHub:   github.com/rudra          │
│ 🐦 Twitter:  @rudra_dev                │
│ 🌐 Website:  rudra.dev                 │
└────────────────────────────────────────┘`
    },
    skills: {
      description: 'Show detailed skills breakdown.',
      usage: 'skills',
      fn: () => `
┌─ SKILL PROFICIENCY ──────────────────────────────┐
│ JavaScript/TypeScript  ████████████████████░ 95% │
│ React/Next.js          ███████████████████░░ 92% │
│ Node.js/Express        ██████████████████░░░ 88% │
│ Python/Django          ████████████████░░░░░ 85% │
│ AWS/Cloud              ███████████████░░░░░░ 80% │
│ Docker/DevOps          ██████████████░░░░░░░ 75% │
└──────────────────────────────────────────────────┘`
    },
    projects: {
      description: 'List all projects.',
      usage: 'projects',
      fn: () => `
┌─ ALL PROJECTS ─────────────────────────────┐
│ 1. MacPortfolio - Interactive Portfolio    │
│ 2. E-Commerce Platform - Online Shopping   │
│ 3. AI Image Generator - Creative Tool      │
│ 4. Task Manager - Productivity App         │
│ 5. Weather Dashboard - Real-time Data      │
│ 6. Chat Application - Real-time Messaging  │
└────────────────────────────────────────────┘`
    }
  }

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState} x={x} y={y} >
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={`
╔═════════════════════════════════════════════════════╗
║ Welcome to Rudra's Interactive Terminal! 🚀         ║
╚═════════════════════════════════════════════════════╝

Type 'help' to see all available commands or try these:
  → portfolio  : View my complete portfolio
  → contact    : Get my contact information
  → skills     : See my technical skills
  → projects   : Browse all projects

Let's explore! 💻✨
`}
          promptLabel={'Rudra@Mac:~$'}
          promptLabelStyle={{ color: '#00ff00' }}
        />
      </div>
    </MacWindow>
  )
}

export default Cli