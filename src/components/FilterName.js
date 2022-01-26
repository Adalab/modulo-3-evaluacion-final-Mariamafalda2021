const FilterName = (props) => {
    const handleInput = (ev) => {
        props.handleFilter({
            key: 'name',
            value: ev.currentTarget.value,
        })
    }
    return (

        <section>
            <label htmlFor="">Buscar por personaje:</label>
            <input
                type="text"
                name="name"
                id="name"
                value={props.FilterName}
                onChange={handleInput}
            />
        </section>
    );
};
export default FilterName;