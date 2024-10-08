import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'
import { Dashboard } from '@/components/Dashboard'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b">
          <div className="container mx-auto flex items-center justify-between py-4">
            <h1 className="text-2xl font-bold">数据库大盘</h1>
            <ModeToggle />
          </div>
        </header>
        <main className="container mx-auto py-8">
          <Dashboard />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App