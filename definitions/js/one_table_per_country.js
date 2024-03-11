const countries = ["US", "CA", "MX", "BR"]

countries.forEach(country => {
    publish("reporting_" + country)
        .dependencies(["new_table"])
        .query(
            ctx => `SELECT '${country}' AS country`
        );
});