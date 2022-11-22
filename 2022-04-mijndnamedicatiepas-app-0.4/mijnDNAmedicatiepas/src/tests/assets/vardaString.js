let vardaString = 'NC_012920.1	149	150	2	-1	1	C\nNC_012920.1	194	195	2	-1	1	T\nNC_012920.1	198	199	2	-1	1	C\nNC_012920.1	203	204	2	-1	1	C\nNC_012920.1	409	410	2	-1	1	T\nNC_012920.1	710	711	2	-1	1	A\nNC_012920.1	931	932	2	-1	1	A\nNC_012920.1	1889	1890	2	-1	1	A\nNC_012920.1	2353	2354	2	-1	1	T\nNC_012920.1	2484	2485	2	-1	1	T\nNC_012920.1	4216	4217	2	-1	1	C\nNC_012920.1	4917	4918	2	-1	1	G\nNC_012920.1	5580	5581	2	-1	1	T\nNC_012920.1	8697	8698	2	-1	1	A\nNC_012920.1	8701	8702	2	-1	1	A\nNC_012920.1	9377	9378	2	-1	1	A\nNC_012920.1	9540	9541	2	-1	1	T\nNC_012920.1	10335	10336	2	-1	1	C\nNC_012920.1	10398	10399	2	-1	1	A\nNC_012920.1	10463	10464	2	-1	1	C\nNC_012920.1	10750	10751	2	-1	1	G\nNC_012920.1	10819	10820	2	-1	1	A\nNC_012920.1	10873	10874	2	-1	1	T\nNC_012920.1	11017	11018	2	-1	1	T\nNC_012920.1	11251	11252	2	-1	1	G\nNC_012920.1	11722	11723	2	-1	1	T\nNC_012920.1	11812	11813	2	-1	1	G\nNC_012920.1	12705	12706	2	-1	1	C\nNC_012920.1	12850	12851	2	-1	1	A\nNC_012920.1	13368	13369	2	-1	1	A\nNC_012920.1	14212	14213	2	-1	1	T\nNC_012920.1	14233	14234	2	-1	1	G\nNC_012920.1	14580	14581	2	-1	1	A\nNC_012920.1	15301	15302	2	-1	1	G\nNC_012920.1	15452	15453	2	-1	1	A\nNC_012920.1	15607	15608	2	-1	1	G\nNC_012920.1	15928	15929	2	-1	1	A\nNC_012920.1	15932	15933	2	-1	1	T\nNC_012920.1	16126	16127	2	-1	1	C\nNC_012920.1	16172	16173	2	-1	1	T'

const testParsedVarda = [
    {'column0': 'NC_012920.1', 'column1': '149', 'column2': '150', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'C'},
    {'column0': 'NC_012920.1', 'column1': '194', 'column2': '195', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'T'},
    {'column0': 'NC_012920.1', 'column1': '198', 'column2': '199', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'C'},
    {'column0': 'NC_012920.1', 'column1': '203', 'column2': '204', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'C'},
    {'column0': 'NC_012920.1', 'column1': '409', 'column2': '410', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'T'},
    {'column0': 'NC_012920.1', 'column1': '710', 'column2': '711', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'A'},
    {'column0': 'NC_012920.1', 'column1': '931', 'column2': '932', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'A'},
    {'column0': 'NC_012920.1', 'column1': '1889', 'column2': '1890', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'A'},
    {'column0': 'NC_012920.1', 'column1': '2353', 'column2': '2354', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'T'},
    {'column0': 'NC_012920.1', 'column1': '2484', 'column2': '2485', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'T'},
    {'column0': 'NC_012920.1', 'column1': '4216', 'column2': '4217', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'C'},
    {'column0': 'NC_012920.1', 'column1': '4917', 'column2': '4918', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'G'},
    {'column0': 'NC_012920.1', 'column1': '5580', 'column2': '5581', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'T'},
    {'column0': 'NC_012920.1', 'column1': '8697', 'column2': '8698', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'A'},
    {'column0': 'NC_012920.1', 'column1': '8701', 'column2': '8702', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'A'},
    {'column0': 'NC_012920.1', 'column1': '9377', 'column2': '9378', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'A'},
    {'column0': 'NC_012920.1', 'column1': '9540', 'column2': '9541', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'T'},
    {'column0': 'NC_012920.1', 'column1': '10335', 'column2': '10336', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'C'},
    {'column0': 'NC_012920.1', 'column1': '10398', 'column2': '10399', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'A'},
    {'column0': 'NC_012920.1', 'column1': '10463', 'column2': '10464', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'C'},
    {'column0': 'NC_012920.1', 'column1': '10750', 'column2': '10751', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'G'},
    {'column0': 'NC_012920.1', 'column1': '10819', 'column2': '10820', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'A'},
    {'column0': 'NC_012920.1', 'column1': '10873', 'column2': '10874', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'T'},
    {'column0': 'NC_012920.1', 'column1': '11017', 'column2': '11018', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'T'},
    {'column0': 'NC_012920.1', 'column1': '11251', 'column2': '11252', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'G'},
    {'column0': 'NC_012920.1', 'column1': '11722', 'column2': '11723', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'T'},
    {'column0': 'NC_012920.1', 'column1': '11812', 'column2': '11813', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'G'},
    {'column0': 'NC_012920.1', 'column1': '12705', 'column2': '12706', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'C'},
    {'column0': 'NC_012920.1', 'column1': '12850', 'column2': '12851', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'A'},
    {'column0': 'NC_012920.1', 'column1': '13368', 'column2': '13369', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'A'},
    {'column0': 'NC_012920.1', 'column1': '14212', 'column2': '14213', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'T'},
    {'column0': 'NC_012920.1', 'column1': '14233', 'column2': '14234', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'G'},
    {'column0': 'NC_012920.1', 'column1': '14580', 'column2': '14581', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'A'},
    {'column0': 'NC_012920.1', 'column1': '15301', 'column2': '15302', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'G'},
    {'column0': 'NC_012920.1', 'column1': '15452', 'column2': '15453', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'A'},
    {'column0': 'NC_012920.1', 'column1': '15607', 'column2': '15608', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'G'},
    {'column0': 'NC_012920.1', 'column1': '15928', 'column2': '15929', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'A'},
    {'column0': 'NC_012920.1', 'column1': '15932', 'column2': '15933', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'T'},
    {'column0': 'NC_012920.1', 'column1': '16126', 'column2': '16127', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'C'},
    {'column0': 'NC_012920.1', 'column1': '16172', 'column2': '16173', 'column3': '2', 'column4': '-1', 'column5': '1', 'column6': 'T'}
]

module.exports = {
    vardaString,
    testParsedVarda
}

export default vardaString