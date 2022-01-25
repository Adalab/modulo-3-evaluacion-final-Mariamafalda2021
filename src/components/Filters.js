import FilterName from "./FilterName";

const Filter = (props) => {
    return (
        <section>
            <form>
                <FilterName
                    filterName={props.filterName}
                    handleFilter={props.handleFilter}
                />
            </form>
        </section>
    )
};
export default Filter;