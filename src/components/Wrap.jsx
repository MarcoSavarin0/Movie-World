import { SearchMovie } from './SearchMovie'
import { ListTopMovies } from './ListTopMovies'
import { UpcomingMovies } from './UpcomingMovies'
import { Header } from './Header/Header'
export const Wrap = () => {
  return (
    <>
        <Header/>
        <UpcomingMovies/>
        <ListTopMovies/>
        <SearchMovie/> 
    </>
  )
}
