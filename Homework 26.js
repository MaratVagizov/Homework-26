let bank = [
    {
        name: "uztelecom",
        budget: 200000,
        expensesPerYear: [
            {
                title: "rent",
                total: 13000,
            },
            {
                title: "salaries",
                total: 85000,
            },
            {
                title: "furniture",
                total: 15000,
            },
        ],
    },
    {
        name: "artel",
        budget: 500000,
        expensesPerYear: [{
                title: "rent",
                total: 15000,
            },
            {
                title: "salaries",
                total: 150000,
            },
            {
                title: "furniture",
                total: 25000,
            },
        ],
    },
    {
        name: "gm",
        budget: 1000000,
        expensesPerYear: [{
                title: "rent",
                total: 30000,
            },
            {
                title: "salaries",
                total: 350000,
            },
            {
                title: "furniture",
                total: 90000,
            }
        ]
    }
]

let expensesPerMonth = []

for ( let item of bank) {
    let perMonthRent = Math.round(item.expensesPerYear[0].total / 12)
    let perMonthSalaries = Math.round(item.expensesPerYear[1].total / 12)
    let perMonthFurniture = Math.round(item.expensesPerYear[2].total / 12)

    expensesPerMonth.push({
        name: item.name,
        budget: item.budget,
        expensesPerMonth: [
            {
                title: item.expensesPerYear[0].title,
                perMonth: perMonthRent,
            },
            {
                title: item.expensesPerYear[1].title,
                perMonth: perMonthSalaries,
            },
            {
                title: item.expensesPerYear[2].title,
                perMonth: perMonthFurniture,
            },
        ],  
})
}

console.log(expensesPerMonth)