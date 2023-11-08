import * as Switch from "@radix-ui/react-switch"
import {create} from 'zustand'

export const useStore = create((set) => ({
    gameState: false,
    setGameState: (newGameState) => set({ gameState: newGameState }),
    successState: false,
    setSuccessState: (newSuccessState) => set({ successState: newSuccessState }),
    failureState: false,
    setFailureState: (newFailureState) => set({ failureState: newFailureState }),
}))


export const NavBar = () => {
    const [gameState, setGameState] = useStore((state) => [state.gameState, state.setGameState])

    const switchHandler = (checked) => {
        setGameState(checked)
    }

    return (
        <div className = "flex flex-row fixed top-0 w-full h-1/6 md:h-1/5 justify-end px-10 py-5">
      <Switch.Root
        className="w-[42px] h-[25px] bg-blackA6 rounded-full relative shadow-[0_2px_10px] shadow-blackA4 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default"
        id="airplane-mode"
        style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
        onCheckedChange={switchHandler}
      >
        <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
        </div>
    )
}