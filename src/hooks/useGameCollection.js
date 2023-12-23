import { useState } from "react"
export default function useGameCollection() {
    const [games, setGames] = useState(() => {
        const storedGames = localStorage.getItem("obc-game-lib")
        if(!storedGames) return []
        return JSON.parse(storedGames)
        
      })
    
      const addGame = ({title, cover}) => {
        const id = Math.floor(Math.random() * 10000000)
        const game = {id, title, cover }
        //pegou o setState com callback (valor anterior), separou o array com os elementos atuais e colocou o ultimo digitado
        setGames(state => {
          const newState = [...state, game]
          localStorage.setItem("obc-game-lib", JSON.stringify(newState))
          return newState
        })
      }
      
      const removeGame = (id) => {
        setGames(state => {
    
          const newState = state.filter(game => game.id !== id)
          localStorage.setItem("obc-game-lib", JSON.stringify(newState))
          return newState
        
        })
      }
      
    return {games, addGame, removeGame}
}