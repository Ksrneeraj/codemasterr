export const sqlTopics = [
    {
        id: 1,
        title: "1. Introduction to Databases & SQL",
        description: "Understanding the basics of data storage.",
        concepts: [
            {
                id: "1-1",
                title: "Basics",
                theory: "What is a database? Relational vs NoSQL. Tables, rows, columns.",
                diagram: "Table: Rows (Records) x Columns (Attributes)",
                resources: [
                    { name: "SQL Introduction", link: "https://www.w3schools.com/sql/sql_intro.asp", source: "W3Schools" },
                    { name: "Database Basics", link: "https://www.geeksforgeeks.org/introduction-to-databases/", source: "GFG" }
                ],
                problems: [
                    { name: "Recyclable and Low Fat Products", link: "https://leetcode.com/problems/recyclable-and-low-fat-products/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Select All", link: "https://www.hackerrank.com/challenges/select-all-sql/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Find Customer Referee", link: "https://leetcode.com/problems/find-customer-referee/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Revising the Select Query I", link: "https://www.hackerrank.com/challenges/revising-the-select-query/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Big Countries", link: "https://leetcode.com/problems/big-countries/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Article Views I", link: "https://leetcode.com/problems/article-views-i/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Invalid Tweets", link: "https://leetcode.com/problems/invalid-tweets/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Calculate Special Bonus", link: "https://leetcode.com/problems/calculate-special-bonus/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Japanese Cities' Attributes", link: "https://www.hackerrank.com/challenges/japanese-cities-attributes/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Fix Names in a Table", link: "https://leetcode.com/problems/fix-names-in-a-table/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Patients With a Condition", link: "https://leetcode.com/problems/patients-with-a-condition/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Convert Date Format", link: "https://leetcode.com/problems/convert-date-format/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Ad-Free Sessions", link: "https://leetcode.com/problems/ad-free-sessions/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Find Total Time Spent by Each Employee", link: "https://leetcode.com/problems/find-total-time-spent-by-each-employee/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Game Play Analysis I", link: "https://leetcode.com/problems/game-play-analysis-i/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "User Activity for the Past 30 Days I", link: "https://leetcode.com/problems/user-activity-for-the-past-30-days-i/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Daily Leads and Partners", link: "https://leetcode.com/problems/daily-leads-and-partners/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Find Followers Count", link: "https://leetcode.com/problems/find-followers-count/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Biggest Single Number", link: "https://leetcode.com/problems/biggest-single-number/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Customers Who Bought All Products", link: "https://leetcode.com/problems/customers-who-bought-all-products/", difficulty: "Medium", platform: "LeetCode" }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "2. Basic SQL Queries",
        description: "Retrieving data from tables.",
        concepts: [
            {
                id: "2-1",
                title: "SELECT & WHERE",
                theory: "SELECT, FROM, WHERE, ORDER BY, LIMIT.",
                diagram: "SELECT * FROM Users WHERE Age > 18",
                resources: [
                    { name: "SQL SELECT", link: "https://www.w3schools.com/sql/sql_select.asp", source: "W3Schools" }
                ],
                problems: [
                    { name: "Select All", link: "https://www.hackerrank.com/challenges/select-all-sql/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Select By ID", link: "https://www.hackerrank.com/challenges/select-by-id/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Japanese Cities' Attributes", link: "https://www.hackerrank.com/challenges/japanese-cities-attributes/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Japanese Cities' Names", link: "https://www.hackerrank.com/challenges/japanese-cities-name/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 1", link: "https://www.hackerrank.com/challenges/weather-observation-station-1/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 3", link: "https://www.hackerrank.com/challenges/weather-observation-station-3/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 4", link: "https://www.hackerrank.com/challenges/weather-observation-station-4/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 5", link: "https://www.hackerrank.com/challenges/weather-observation-station-5/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 6", link: "https://www.hackerrank.com/challenges/weather-observation-station-6/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 7", link: "https://www.hackerrank.com/challenges/weather-observation-station-7/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 8", link: "https://www.hackerrank.com/challenges/weather-observation-station-8/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 9", link: "https://www.hackerrank.com/challenges/weather-observation-station-9/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 10", link: "https://www.hackerrank.com/challenges/weather-observation-station-10/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 11", link: "https://www.hackerrank.com/challenges/weather-observation-station-11/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 12", link: "https://www.hackerrank.com/challenges/weather-observation-station-12/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Higher Than 75 Marks", link: "https://www.hackerrank.com/challenges/more-than-75-marks/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Employee Names", link: "https://www.hackerrank.com/challenges/name-of-employees/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Employee Salaries", link: "https://www.hackerrank.com/challenges/salary-of-employees/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Type of Triangle", link: "https://www.hackerrank.com/challenges/what-type-of-triangle/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "The PADS", link: "https://www.hackerrank.com/challenges/the-pads/problem", difficulty: "Medium", platform: "HackerRank" }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "3. Filtering & Basic Functions",
        description: "Refining query results.",
        concepts: [
            {
                id: "3-1",
                title: "Filtering",
                theory: "DISTINCT, COUNT, SUM, AVG, MIN, MAX. Aliases (AS).",
                diagram: "Filter -> Aggregate -> Result",
                resources: [
                    { name: "SQL Aggregate Functions", link: "https://www.geeksforgeeks.org/aggregate-functions-in-sql/", source: "GFG" }
                ],
                problems: [
                    { name: "Revising the Select Query I", link: "https://www.hackerrank.com/challenges/revising-the-select-query/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Revising the Select Query II", link: "https://www.hackerrank.com/challenges/revising-the-select-query-2/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Average Population of Each Continent", link: "https://www.hackerrank.com/challenges/average-population-of-each-continent/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "The Blunder", link: "https://www.hackerrank.com/challenges/the-blunder/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Top Earners", link: "https://www.hackerrank.com/challenges/earnings-of-employees/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Weather Observation Station 2", link: "https://www.hackerrank.com/challenges/weather-observation-station-2/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 13", link: "https://www.hackerrank.com/challenges/weather-observation-station-13/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 14", link: "https://www.hackerrank.com/challenges/weather-observation-station-14/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 15", link: "https://www.hackerrank.com/challenges/weather-observation-station-15/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 16", link: "https://www.hackerrank.com/challenges/weather-observation-station-16/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 17", link: "https://www.hackerrank.com/challenges/weather-observation-station-17/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 18", link: "https://www.hackerrank.com/challenges/weather-observation-station-18/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Weather Observation Station 19", link: "https://www.hackerrank.com/challenges/weather-observation-station-19/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Population Census", link: "https://www.hackerrank.com/challenges/asian-population/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "African Cities", link: "https://www.hackerrank.com/challenges/african-cities/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Average Population", link: "https://www.hackerrank.com/challenges/average-population/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Japan Population", link: "https://www.hackerrank.com/challenges/japan-population/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Population Density Difference", link: "https://www.hackerrank.com/challenges/population-density-difference/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Not Boring Movies", link: "https://leetcode.com/problems/not-boring-movies/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Exchange Seats", link: "https://leetcode.com/problems/exchange-seats/", difficulty: "Medium", platform: "LeetCode" }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "4. GROUP BY & Aggregations",
        description: "Grouping data for analysis.",
        concepts: [
            {
                id: "4-1",
                title: "Grouping",
                theory: "GROUP BY, HAVING vs WHERE.",
                diagram: "Raw Data -> Group By Category -> Aggregate",
                resources: [
                    { name: "SQL GROUP BY", link: "https://www.w3schools.com/sql/sql_groupby.asp", source: "W3Schools" }
                ],
                problems: [
                    { name: "Classes More Than 5 Students", link: "https://leetcode.com/problems/classes-more-than-5-students/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Daily Leads and Partners", link: "https://leetcode.com/problems/daily-leads-and-partners/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Find Followers Count", link: "https://leetcode.com/problems/find-followers-count/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Biggest Single Number", link: "https://leetcode.com/problems/biggest-single-number/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Customers Who Bought All Products", link: "https://leetcode.com/problems/customers-who-bought-all-products/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Product Sales Analysis III", link: "https://leetcode.com/problems/product-sales-analysis-iii/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Managers with at Least 5 Direct Reports", link: "https://leetcode.com/problems/managers-with-at-least-5-direct-reports/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Game Play Analysis IV", link: "https://leetcode.com/problems/game-play-analysis-iv/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Number of Unique Subjects Taught by Each Teacher", link: "https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "User Activity for the Past 30 Days I", link: "https://leetcode.com/problems/user-activity-for-the-past-30-days-i/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Sales Analysis III", link: "https://leetcode.com/problems/sales-analysis-iii/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Actors and Directors Who Cooperated At Least Three Times", link: "https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Bank Account Summary II", link: "https://leetcode.com/problems/bank-account-summary-ii/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Top Travellers", link: "https://leetcode.com/problems/top-travellers/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Market Analysis I", link: "https://leetcode.com/problems/market-analysis-i/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Capital Gain/Loss", link: "https://leetcode.com/problems/capital-gainloss/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Tree Node", link: "https://leetcode.com/problems/tree-node/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Department Highest Salary", link: "https://leetcode.com/problems/department-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Investments in 2016", link: "https://leetcode.com/problems/investments-in-2016/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Department Top Three Salaries", link: "https://leetcode.com/problems/department-top-three-salaries/", difficulty: "Hard", platform: "LeetCode" }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "5. JOINS",
        description: "Combining data from multiple tables.",
        concepts: [
            {
                id: "5-1",
                title: "Join Types",
                theory: "INNER, LEFT, RIGHT, FULL OUTER, CROSS JOIN.",
                diagram: "Venn Diagrams",
                resources: [
                    { name: "SQL Joins", link: "https://www.w3schools.com/sql/sql_join.asp", source: "W3Schools" }
                ],
                problems: [
                    { name: "Combine Two Tables", link: "https://leetcode.com/problems/combine-two-tables/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Employee Bonus", link: "https://leetcode.com/problems/employee-bonus/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Customer Who Visited but Did Not Make Any Transactions", link: "https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Rising Temperature", link: "https://leetcode.com/problems/rising-temperature/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Average Time of Process per Machine", link: "https://leetcode.com/problems/average-time-of-process-per-machine/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Employee Unique ID", link: "https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Product Sales Analysis I", link: "https://leetcode.com/problems/product-sales-analysis-i/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Project Employees I", link: "https://leetcode.com/problems/project-employees-i/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Students and Examinations", link: "https://leetcode.com/problems/students-and-examinations/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Managers with at Least 5 Direct Reports", link: "https://leetcode.com/problems/managers-with-at-least-5-direct-reports/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Confirmation Rate", link: "https://leetcode.com/problems/confirmation-rate/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Monthly Transactions I", link: "https://leetcode.com/problems/monthly-transactions-i/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Immediate Food Delivery II", link: "https://leetcode.com/problems/immediate-food-delivery-ii/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Game Play Analysis IV", link: "https://leetcode.com/problems/game-play-analysis-iv/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Product Price at a Given Date", link: "https://leetcode.com/problems/product-price-at-a-given-date/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Last Person to Fit in the Bus", link: "https://leetcode.com/problems/last-person-to-fit-in-the-bus/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Count Salary Categories", link: "https://leetcode.com/problems/count-salary-categories/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Exchange Seats", link: "https://leetcode.com/problems/exchange-seats/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Movie Rating", link: "https://leetcode.com/problems/movie-rating/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Restaurant Growth", link: "https://leetcode.com/problems/restaurant-growth/", difficulty: "Medium", platform: "LeetCode" }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "6. Subqueries",
        description: "Nested queries.",
        concepts: [
            {
                id: "6-1",
                title: "Subqueries",
                theory: "Correlated vs Non-correlated subqueries.",
                diagram: "Query ( Subquery )",
                resources: [
                    { name: "SQL Subqueries", link: "https://www.geeksforgeeks.org/sql-subquery/", source: "GFG" }
                ],
                problems: [
                    { name: "Sales Person", link: "https://leetcode.com/problems/sales-person/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Employees Whose Manager Left the Company", link: "https://leetcode.com/problems/employees-whose-manager-left-the-company/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Triangle Judgement", link: "https://leetcode.com/problems/triangle-judgement/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Primary Department for Each Employee", link: "https://leetcode.com/problems/primary-department-for-each-employee/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "The Number of Employees Which Report to Each Employee", link: "https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Product Sales Analysis III", link: "https://leetcode.com/problems/product-sales-analysis-iii/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Game Play Analysis IV", link: "https://leetcode.com/problems/game-play-analysis-iv/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Product Price at a Given Date", link: "https://leetcode.com/problems/product-price-at-a-given-date/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Last Person to Fit in the Bus", link: "https://leetcode.com/problems/last-person-to-fit-in-the-bus/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Count Salary Categories", link: "https://leetcode.com/problems/count-salary-categories/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Exchange Seats", link: "https://leetcode.com/problems/exchange-seats/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Movie Rating", link: "https://leetcode.com/problems/movie-rating/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Restaurant Growth", link: "https://leetcode.com/problems/restaurant-growth/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Friend Requests II: Who Has the Most Friends", link: "https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Investments in 2016", link: "https://leetcode.com/problems/investments-in-2016/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Department Top Three Salaries", link: "https://leetcode.com/problems/department-top-three-salaries/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Human Traffic of Stadium", link: "https://leetcode.com/problems/human-traffic-of-stadium/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Trips and Users", link: "https://leetcode.com/problems/trips-and-users/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Average Salary: Departments VS Company", link: "https://leetcode.com/problems/average-salary-departments-vs-company/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Students Report By Geography", link: "https://leetcode.com/problems/students-report-by-geography/", difficulty: "Hard", platform: "LeetCode" }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "7. Data Definition (DDL)",
        description: "Defining database structure.",
        concepts: [
            {
                id: "7-1",
                title: "DDL Basics",
                theory: "CREATE, ALTER, DROP. Constraints: PK, FK, UNIQUE, NOT NULL.",
                diagram: "Schema Definition",
                resources: [
                    { name: "SQL CREATE TABLE", link: "https://www.w3schools.com/sql/sql_create_table.asp", source: "W3Schools" }
                ],
                problems: [
                    { name: "Create a Table", link: "https://www.hackerrank.com/challenges/create-a-table/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Revising Aggregations - The Count Function", link: "https://www.hackerrank.com/challenges/revising-aggregations-the-count-function/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Revising Aggregations - The Sum Function", link: "https://www.hackerrank.com/challenges/revising-aggregations-the-sum-function/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Revising Aggregations - Averages", link: "https://www.hackerrank.com/challenges/revising-aggregations-the-average-function/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Average Population", link: "https://www.hackerrank.com/challenges/average-population/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Japan Population", link: "https://www.hackerrank.com/challenges/japan-population/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Population Density Difference", link: "https://www.hackerrank.com/challenges/population-density-difference/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "The Blunder", link: "https://www.hackerrank.com/challenges/the-blunder/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Top Earners", link: "https://www.hackerrank.com/challenges/earnings-of-employees/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Weather Observation Station 2", link: "https://www.hackerrank.com/challenges/weather-observation-station-2/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 13", link: "https://www.hackerrank.com/challenges/weather-observation-station-13/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 14", link: "https://www.hackerrank.com/challenges/weather-observation-station-14/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 15", link: "https://www.hackerrank.com/challenges/weather-observation-station-15/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 16", link: "https://www.hackerrank.com/challenges/weather-observation-station-16/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 17", link: "https://www.hackerrank.com/challenges/weather-observation-station-17/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Weather Observation Station 18", link: "https://www.hackerrank.com/challenges/weather-observation-station-18/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Weather Observation Station 19", link: "https://www.hackerrank.com/challenges/weather-observation-station-19/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Weather Observation Station 20", link: "https://www.hackerrank.com/challenges/weather-observation-station-20/problem", difficulty: "Medium", platform: "HackerRank" },
                    { name: "Draw The Triangle 1", link: "https://www.hackerrank.com/challenges/draw-the-triangle-1/problem", difficulty: "Easy", platform: "HackerRank" },
                    { name: "Draw The Triangle 2", link: "https://www.hackerrank.com/challenges/draw-the-triangle-2/problem", difficulty: "Easy", platform: "HackerRank" }
                ]
            }
        ]
    },
    {
        id: 8,
        title: "8. Data Manipulation (DML)",
        description: "Modifying data.",
        concepts: [
            {
                id: "8-1",
                title: "DML Operations",
                theory: "INSERT, UPDATE, DELETE, TRUNCATE.",
                diagram: "Table State Change",
                resources: [
                    { name: "SQL INSERT", link: "https://www.w3schools.com/sql/sql_insert.asp", source: "W3Schools" }
                ],
                problems: [
                    { name: "Delete Duplicate Emails", link: "https://leetcode.com/problems/delete-duplicate-emails/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Swap Salary", link: "https://leetcode.com/problems/swap-salary/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Fix Names in a Table", link: "https://leetcode.com/problems/fix-names-in-a-table/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Calculate Special Bonus", link: "https://leetcode.com/problems/calculate-special-bonus/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Patients With a Condition", link: "https://leetcode.com/problems/patients-with-a-condition/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Convert Date Format", link: "https://leetcode.com/problems/convert-date-format/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Second Highest Salary", link: "https://leetcode.com/problems/second-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Nth Highest Salary", link: "https://leetcode.com/problems/nth-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Rank Scores", link: "https://leetcode.com/problems/rank-scores/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Consecutive Numbers", link: "https://leetcode.com/problems/consecutive-numbers/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Employees Earning More Than Their Managers", link: "https://leetcode.com/problems/employees-earning-more-than-their-managers/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Duplicate Emails", link: "https://leetcode.com/problems/duplicate-emails/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Customers Who Never Order", link: "https://leetcode.com/problems/customers-who-never-order/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Department Highest Salary", link: "https://leetcode.com/problems/department-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Department Top Three Salaries", link: "https://leetcode.com/problems/department-top-three-salaries/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Exchange Seats", link: "https://leetcode.com/problems/exchange-seats/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Tree Node", link: "https://leetcode.com/problems/tree-node/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Capital Gain/Loss", link: "https://leetcode.com/problems/capital-gainloss/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Market Analysis I", link: "https://leetcode.com/problems/market-analysis-i/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Human Traffic of Stadium", link: "https://leetcode.com/problems/human-traffic-of-stadium/", difficulty: "Hard", platform: "LeetCode" }
                ]
            }
        ]
    },
    {
        id: 9,
        title: "9. Indexes & Performance",
        description: "Optimizing query speed.",
        concepts: [
            {
                id: "9-1",
                title: "Indexing",
                theory: "Clustered vs Non-clustered indexes. When to use.",
                diagram: "Book Index Analogy",
                resources: [
                    { name: "SQL Indexes", link: "https://www.w3schools.com/sql/sql_create_index.asp", source: "W3Schools" }
                ],
                problems: [
                    { name: "Second Highest Salary", link: "https://leetcode.com/problems/second-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Nth Highest Salary", link: "https://leetcode.com/problems/nth-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Rank Scores", link: "https://leetcode.com/problems/rank-scores/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Consecutive Numbers", link: "https://leetcode.com/problems/consecutive-numbers/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Department Highest Salary", link: "https://leetcode.com/problems/department-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Department Top Three Salaries", link: "https://leetcode.com/problems/department-top-three-salaries/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Human Traffic of Stadium", link: "https://leetcode.com/problems/human-traffic-of-stadium/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Trips and Users", link: "https://leetcode.com/problems/trips-and-users/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Average Salary: Departments VS Company", link: "https://leetcode.com/problems/average-salary-departments-vs-company/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Students Report By Geography", link: "https://leetcode.com/problems/students-report-by-geography/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Get Highest Answer Rate Question", link: "https://leetcode.com/problems/get-highest-answer-rate-question/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Count Student Number in Departments", link: "https://leetcode.com/problems/count-student-number-in-departments/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Find Cumulative Salary of an Employee", link: "https://leetcode.com/problems/find-cumulative-salary-of-an-employee/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Median Employee Salary", link: "https://leetcode.com/problems/median-employee-salary/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Managers with at Least 5 Direct Reports", link: "https://leetcode.com/problems/managers-with-at-least-5-direct-reports/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Winning Candidate", link: "https://leetcode.com/problems/winning-candidate/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Employee Bonus", link: "https://leetcode.com/problems/employee-bonus/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Get Nth Highest Salary", link: "https://leetcode.com/problems/nth-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Project Employees I", link: "https://leetcode.com/problems/project-employees-i/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Project Employees II", link: "https://leetcode.com/problems/project-employees-ii/", difficulty: "Easy", platform: "LeetCode" }
                ]
            }
        ]
    },
    {
        id: 10,
        title: "10. Views & Functions",
        description: "Reusable query logic.",
        concepts: [
            {
                id: "10-1",
                title: "Views & Procs",
                theory: "Creating Views. Stored Procedures intro.",
                diagram: "Virtual Table (View)",
                resources: [
                    { name: "SQL Views", link: "https://www.w3schools.com/sql/sql_view.asp", source: "W3Schools" }
                ],
                problems: [
                    { name: "Second Highest Salary", link: "https://leetcode.com/problems/second-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Nth Highest Salary", link: "https://leetcode.com/problems/nth-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Rank Scores", link: "https://leetcode.com/problems/rank-scores/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Consecutive Numbers", link: "https://leetcode.com/problems/consecutive-numbers/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Department Highest Salary", link: "https://leetcode.com/problems/department-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Department Top Three Salaries", link: "https://leetcode.com/problems/department-top-three-salaries/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Human Traffic of Stadium", link: "https://leetcode.com/problems/human-traffic-of-stadium/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Trips and Users", link: "https://leetcode.com/problems/trips-and-users/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Average Salary: Departments VS Company", link: "https://leetcode.com/problems/average-salary-departments-vs-company/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Students Report By Geography", link: "https://leetcode.com/problems/students-report-by-geography/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Get Highest Answer Rate Question", link: "https://leetcode.com/problems/get-highest-answer-rate-question/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Count Student Number in Departments", link: "https://leetcode.com/problems/count-student-number-in-departments/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Find Cumulative Salary of an Employee", link: "https://leetcode.com/problems/find-cumulative-salary-of-an-employee/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Median Employee Salary", link: "https://leetcode.com/problems/median-employee-salary/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Managers with at Least 5 Direct Reports", link: "https://leetcode.com/problems/managers-with-at-least-5-direct-reports/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Winning Candidate", link: "https://leetcode.com/problems/winning-candidate/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Employee Bonus", link: "https://leetcode.com/problems/employee-bonus/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Get Nth Highest Salary", link: "https://leetcode.com/problems/nth-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Project Employees I", link: "https://leetcode.com/problems/project-employees-i/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Project Employees II", link: "https://leetcode.com/problems/project-employees-ii/", difficulty: "Easy", platform: "LeetCode" }
                ]
            }
        ]
    },
    {
        id: 11,
        title: "11. Window Functions",
        description: "Advanced analytics.",
        concepts: [
            {
                id: "11-1",
                title: "Analytics",
                theory: "OVER(), ROW_NUMBER, RANK, DENSE_RANK, PARTITION BY.",
                diagram: "Sliding Window over Data",
                resources: [
                    { name: "SQL Window Functions", link: "https://www.geeksforgeeks.org/window-functions-in-sql/", source: "GFG" }
                ],
                problems: [
                    { name: "Nth Highest Salary", link: "https://leetcode.com/problems/nth-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Rank Scores", link: "https://leetcode.com/problems/rank-scores/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Consecutive Numbers", link: "https://leetcode.com/problems/consecutive-numbers/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Department Top Three Salaries", link: "https://leetcode.com/problems/department-top-three-salaries/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Exchange Seats", link: "https://leetcode.com/problems/exchange-seats/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Tree Node", link: "https://leetcode.com/problems/tree-node/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Capital Gain/Loss", link: "https://leetcode.com/problems/capital-gainloss/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Market Analysis I", link: "https://leetcode.com/problems/market-analysis-i/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Human Traffic of Stadium", link: "https://leetcode.com/problems/human-traffic-of-stadium/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Trips and Users", link: "https://leetcode.com/problems/trips-and-users/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Average Salary: Departments VS Company", link: "https://leetcode.com/problems/average-salary-departments-vs-company/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Students Report By Geography", link: "https://leetcode.com/problems/students-report-by-geography/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Get Highest Answer Rate Question", link: "https://leetcode.com/problems/get-highest-answer-rate-question/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Count Student Number in Departments", link: "https://leetcode.com/problems/count-student-number-in-departments/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Find Cumulative Salary of an Employee", link: "https://leetcode.com/problems/find-cumulative-salary-of-an-employee/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Median Employee Salary", link: "https://leetcode.com/problems/median-employee-salary/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Managers with at Least 5 Direct Reports", link: "https://leetcode.com/problems/managers-with-at-least-5-direct-reports/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Winning Candidate", link: "https://leetcode.com/problems/winning-candidate/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Employee Bonus", link: "https://leetcode.com/problems/employee-bonus/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Get Nth Highest Salary", link: "https://leetcode.com/problems/nth-highest-salary/", difficulty: "Medium", platform: "LeetCode" }
                ]
            }
        ]
    },
    {
        id: 12,
        title: "12. Transactions & ACID",
        description: "Ensuring data integrity.",
        concepts: [
            {
                id: "12-1",
                title: "ACID",
                theory: "Atomicity, Consistency, Isolation, Durability. COMMIT/ROLLBACK.",
                diagram: "All or Nothing",
                resources: [
                    { name: "SQL Transactions", link: "https://www.geeksforgeeks.org/sql-transactions/", source: "GFG" }
                ],
                problems: [
                    { name: "Swap Salary", link: "https://leetcode.com/problems/swap-salary/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Exchange Seats", link: "https://leetcode.com/problems/exchange-seats/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Department Top Three Salaries", link: "https://leetcode.com/problems/department-top-three-salaries/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Trips and Users", link: "https://leetcode.com/problems/trips-and-users/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Human Traffic of Stadium", link: "https://leetcode.com/problems/human-traffic-of-stadium/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Consecutive Numbers", link: "https://leetcode.com/problems/consecutive-numbers/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Rank Scores", link: "https://leetcode.com/problems/rank-scores/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Nth Highest Salary", link: "https://leetcode.com/problems/nth-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Second Highest Salary", link: "https://leetcode.com/problems/second-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Duplicate Emails", link: "https://leetcode.com/problems/duplicate-emails/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Employees Earning More Than Their Managers", link: "https://leetcode.com/problems/employees-earning-more-than-their-managers/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Customers Who Never Order", link: "https://leetcode.com/problems/customers-who-never-order/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Delete Duplicate Emails", link: "https://leetcode.com/problems/delete-duplicate-emails/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Rising Temperature", link: "https://leetcode.com/problems/rising-temperature/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Combine Two Tables", link: "https://leetcode.com/problems/combine-two-tables/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Person", link: "https://leetcode.com/problems/person/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Address", link: "https://leetcode.com/problems/address/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Employee", link: "https://leetcode.com/problems/employee/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Salary", link: "https://leetcode.com/problems/salary/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Bonus", link: "https://leetcode.com/problems/bonus/", difficulty: "Easy", platform: "LeetCode" }
                ]
            }
        ]
    },
    {
        id: 13,
        title: "13. Database Design",
        description: "Structuring data efficiently.",
        concepts: [
            {
                id: "13-1",
                title: "Normalization",
                theory: "ER Diagrams. Normal Forms (1NF, 2NF, 3NF).",
                diagram: "Entity-Relationship Model",
                resources: [
                    { name: "Database Normalization", link: "https://www.geeksforgeeks.org/database-normalization-introduction/", source: "GFG" }
                ],
                problems: [
                    { name: "Combine Two Tables", link: "https://leetcode.com/problems/combine-two-tables/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Second Highest Salary", link: "https://leetcode.com/problems/second-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Nth Highest Salary", link: "https://leetcode.com/problems/nth-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Rank Scores", link: "https://leetcode.com/problems/rank-scores/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Consecutive Numbers", link: "https://leetcode.com/problems/consecutive-numbers/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Employees Earning More Than Their Managers", link: "https://leetcode.com/problems/employees-earning-more-than-their-managers/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Duplicate Emails", link: "https://leetcode.com/problems/duplicate-emails/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Customers Who Never Order", link: "https://leetcode.com/problems/customers-who-never-order/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Delete Duplicate Emails", link: "https://leetcode.com/problems/delete-duplicate-emails/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Rising Temperature", link: "https://leetcode.com/problems/rising-temperature/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Department Highest Salary", link: "https://leetcode.com/problems/department-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Department Top Three Salaries", link: "https://leetcode.com/problems/department-top-three-salaries/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Exchange Seats", link: "https://leetcode.com/problems/exchange-seats/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Tree Node", link: "https://leetcode.com/problems/tree-node/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Capital Gain/Loss", link: "https://leetcode.com/problems/capital-gainloss/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Market Analysis I", link: "https://leetcode.com/problems/market-analysis-i/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Human Traffic of Stadium", link: "https://leetcode.com/problems/human-traffic-of-stadium/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Trips and Users", link: "https://leetcode.com/problems/trips-and-users/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Average Salary: Departments VS Company", link: "https://leetcode.com/problems/average-salary-departments-vs-company/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Students Report By Geography", link: "https://leetcode.com/problems/students-report-by-geography/", difficulty: "Hard", platform: "LeetCode" }
                ]
            }
        ]
    },
    {
        id: 14,
        title: "14. Projects & Practice",
        description: "Real-world application.",
        concepts: [
            {
                id: "14-1",
                title: "Projects",
                theory: "Ideas: Student Management, Library System, E-commerce.",
                diagram: "Full System Schema",
                resources: [
                    { name: "SQL Project Ideas", link: "https://www.geeksforgeeks.org/sql-project-ideas/", source: "GFG" }
                ],
                problems: [
                    { name: "Combine Two Tables", link: "https://leetcode.com/problems/combine-two-tables/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Second Highest Salary", link: "https://leetcode.com/problems/second-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Nth Highest Salary", link: "https://leetcode.com/problems/nth-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Rank Scores", link: "https://leetcode.com/problems/rank-scores/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Consecutive Numbers", link: "https://leetcode.com/problems/consecutive-numbers/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Employees Earning More Than Their Managers", link: "https://leetcode.com/problems/employees-earning-more-than-their-managers/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Duplicate Emails", link: "https://leetcode.com/problems/duplicate-emails/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Customers Who Never Order", link: "https://leetcode.com/problems/customers-who-never-order/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Delete Duplicate Emails", link: "https://leetcode.com/problems/delete-duplicate-emails/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Rising Temperature", link: "https://leetcode.com/problems/rising-temperature/", difficulty: "Easy", platform: "LeetCode" },
                    { name: "Department Highest Salary", link: "https://leetcode.com/problems/department-highest-salary/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Department Top Three Salaries", link: "https://leetcode.com/problems/department-top-three-salaries/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Exchange Seats", link: "https://leetcode.com/problems/exchange-seats/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Tree Node", link: "https://leetcode.com/problems/tree-node/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Capital Gain/Loss", link: "https://leetcode.com/problems/capital-gainloss/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Market Analysis I", link: "https://leetcode.com/problems/market-analysis-i/", difficulty: "Medium", platform: "LeetCode" },
                    { name: "Human Traffic of Stadium", link: "https://leetcode.com/problems/human-traffic-of-stadium/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Trips and Users", link: "https://leetcode.com/problems/trips-and-users/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Average Salary: Departments VS Company", link: "https://leetcode.com/problems/average-salary-departments-vs-company/", difficulty: "Hard", platform: "LeetCode" },
                    { name: "Students Report By Geography", link: "https://leetcode.com/problems/students-report-by-geography/", difficulty: "Hard", platform: "LeetCode" }
                ]
            }
        ]
    }
];
