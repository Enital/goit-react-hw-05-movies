// import MovieInformation from "components/MovieInformation/MovieInformation";
// import Casts from "components/Casts/Casts";
import MovieOverview from "components/MovieOverview/MovieOverview";
// import Reviews from "components/Reviews/Reviews";
import { Route, Outlet } from "react-router-dom";
// import MoviesSearch from "components/MoviesSearch/MoviesSearch";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

import css from './movies.module.css'

const Movies = () => {
    // const { movieId } = useParams();

    return (
        <section className={css.section}>
            <MovieOverview />
            {/* <Route>
                <Route path="cast" element={<Casts />} />
                <Route path="reviews" element={<Reviews/> } />
            </Route> */}
            {/* <MovieInformation /> */}
        </section>
    )
}

export default Movies;