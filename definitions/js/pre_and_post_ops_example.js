publish("example", {
        type: "table"
    })
    .preOps(ctx => `DELETE FROM ${ctx.self()} WHERE count = 0`)
    .query(ctx => `SELECT * FROM ${ctx.ref("quickstart-table")}`)
    .postOps(ctx => `GRANT SELECT on ${ctx.self()} to "icastillejos@gmail.com"`)
