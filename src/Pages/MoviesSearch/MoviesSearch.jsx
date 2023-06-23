// import MovieInformation from "components/MovieInformation/MovieInformation";
import Casts from "components/Casts/Casts";
import MovieOverview from "components/MovieOverview/MovieOverview";
import Reviews from "components/Reviews/Reviews";
import { Route } from "react-router-dom";
// import MoviesSearch from "components/MoviesSearch/MoviesSearch";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

import css from './MoviesSearch.module.css'

const MoviesSearch = () => {
    // const { movieId } = useParams();

    return (
        <section className={css.section}>
            <MovieOverview />
                <Route path="cast" element={<Casts />} />
                <Route path="reviews" element={<Reviews/> } />
            {/* <MovieInformation /> */}
        </section>
    )
}

export default MoviesSearch;