import { createContext, useContext, useState, ReactNode } from 'react'

interface TransitionContextType {
    fromGame: boolean
    transitionProgress: 'idle' | 'revealing' | 'complete'
    setFromGame: (v: boolean) => void
    setTransitionProgress: (v: 'idle' | 'revealing' | 'complete') => void
}

const TransitionContext = createContext<TransitionContextType>({
    fromGame: false,
    transitionProgress: 'idle',
    setFromGame: () => { },
    setTransitionProgress: () => { },
})

export function TransitionProvider({ children }: { children: ReactNode }) {
    const [fromGame, setFromGame] = useState(false)
    const [transitionProgress, setTransitionProgress] = useState<'idle' | 'revealing' | 'complete'>('idle')

    return (
        <TransitionContext.Provider value={{
            fromGame, setFromGame,
            transitionProgress, setTransitionProgress
        }}>
            {children}
        </TransitionContext.Provider>
    )
}

export const useTransition = () => useContext(TransitionContext)
