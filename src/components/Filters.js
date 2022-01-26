import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";

const Filter = (props) => {
    const handleForm = (ev) => {
        ev.preventDefault();
    }
    return (
        <section>
            <form onSubmit={handleForm}>
                <FilterName
                    filterName={props.filterName}
                    handleFilter={props.handleFilter}
                />
                <FilterHouse
                    handleFilter={props.handleFilter}
                    filterHouse={props.filterHouse} />
            </form>
        </section>
    )
};
export default Filter;