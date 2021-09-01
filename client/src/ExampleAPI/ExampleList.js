const exampleList = [
        {
            "Symbol": "AAPL",
            "Change": -0.0006
        },
        {
            "Symbol": "MSFT",
            "Change": -0.0067
        },
        {
            "Symbol": "GOOG",
            "Change": 0.0092
        },
        {
            "Symbol": "GOOGL",
            "Change": 0.0087
        },
        {
            "Symbol": "ADSK",
            "Change": 0.0128
        },
        {
            "Symbol": "AMZN",
            "Change": 0.0122
        },
        {
            "Symbol": "FB",
            "Change": 0.0059
        },
        {
            "Symbol": "TSLA",
            "Change": 0.0031
        },
        {
            "Symbol": "TSM",
            "Change": 0.0104
        },
        {
            "Symbol": "NVDA",
            "Change": -0.0075
        },
        {
            "Symbol": "V",
            "Change": 0.0004
        },
        {
            "Symbol": "JPM",
            "Change": 0.0062
        },
        {
            "Symbol": "JNJ",
            "Change": -0.0125
        },
        {
            "Symbol": "BABA",
            "Change": 0.0661
        },
        {
            "Symbol": "WMT",
            "Change": -0.0103
        },
        {
            "Symbol": "UNH",
            "Change": -0.0046
        },
        {
            "Symbol": "BAC",
            "Change": 0.0139
        },
        {
            "Symbol": "MA",
            "Change": 0.0021
        },
        {
            "Symbol": "PG",
            "Change": -0.0081
        },
        {
            "Symbol": "HD",
            "Change": -0.0087
        },
        {
            "Symbol": "ASML",
            "Change": -0.0074
        },
        {
            "Symbol": "PYPL",
            "Change": 0.0091
        },
        {
            "Symbol": "DIS",
            "Change": 0.0046
        },
        {
            "Symbol": "ADBE",
            "Change": 0.0006
        },
        {
            "Symbol": "CMCSA",
            "Change": -0.0045
        },
        {
            "Symbol": "BBL",
            "Change": 0.017
        },
        {
            "Symbol": "BHP",
            "Change": 0.0124
        },
        {
            "Symbol": "BMY",
            "Change": -0.0061
        },
        {
            "Symbol": "C",
            "Change": 0.0162
        },
        {
            "Symbol": "CHTR",
            "Change": -0.0061
        },
        {
            "Symbol": "CVX",
            "Change": 0.0115
        },
        {
            "Symbol": "HDB",
            "Change": 0.0057
        },
        {
            "Symbol": "HON",
            "Change": 0.0058
        },
        {
            "Symbol": "INTU",
            "Change": 0.0028
        },
        {
            "Symbol": "LIN",
            "Change": -0.0011
        },
        {
            "Symbol": "MCD",
            "Change": -0.0051
        },
        {
            "Symbol": "MDT",
            "Change": 0.0318
        },
        {
            "Symbol": "MRNA",
            "Change": -0.0412
        },
        {
            "Symbol": "MS",
            "Change": 0.0091
        },
        {
            "Symbol": "NEE",
            "Change": -0.0031
        },
        {
            "Symbol": "PM",
            "Change": -0.0022
        },
        {
            "Symbol": "QCOM",
            "Change": 0.0022
        },
        {
            "Symbol": "RY",
            "Change": 0.0054
        },
        {
            "Symbol": "SAP",
            "Change": -0.0048
        },
        {
            "Symbol": "SE",
            "Change": -0.0102
        },
        {
            "Symbol": "SHOP",
            "Change": 0.0385
        },
        {
            "Symbol": "TMUS",
            "Change": -0.0003
        },
        {
            "Symbol": "TXN",
            "Change": -0.0002
        },
        {
            "Symbol": "UPS",
            "Change": 0.0014
        },
        {
            "Symbol": "NKE",
            "Change": 0.0015
        },
        {
            "Symbol": "PFE",
            "Change": -0.031
        },
        {
            "Symbol": "CRM",
            "Change": -0.0033
        },
        {
            "Symbol": "LLY",
            "Change": -0.0189
        },
        {
            "Symbol": "CSCO",
            "Change": 0.0133
        },
        {
            "Symbol": "ORCL",
            "Change": -0.0064
        },
        {
            "Symbol": "NFLX",
            "Change": 0.0001
        },
        {
            "Symbol": "TM",
            "Change": 0.0135
        },
        {
            "Symbol": "KO",
            "Change": -0.0076
        },
        {
            "Symbol": "NVO",
            "Change": -0.0219
        },
        {
            "Symbol": "XOM",
            "Change": 0.0082
        },
        {
            "Symbol": "DHR",
            "Change": 0.0064
        },
        {
            "Symbol": "VZ",
            "Change": -0.0074
        },
        {
            "Symbol": "ABT",
            "Change": -0.0027
        },
        {
            "Symbol": "INTC",
            "Change": 0.0109
        },
        {
            "Symbol": "TMO",
            "Change": -0.0038
        },
        {
            "Symbol": "PEP",
            "Change": -0.0124
        },
        {
            "Symbol": "ABBV",
            "Change": 0.0027
        },
        {
            "Symbol": "ACN",
            "Change": -0.006
        },
        {
            "Symbol": "NVS",
            "Change": -0.0171
        },
        {
            "Symbol": "WFC",
            "Change": 0.0158
        },
        {
            "Symbol": "COST",
            "Change": -0.0069
        },
        {
            "Symbol": "AVGO",
            "Change": -0.0021
        },
        {
            "Symbol": "T",
            "Change": -0.0025
        },
        {
            "Symbol": "MRK",
            "Change": -0.0084
        },
        {
            "Symbol": "UL",
            "Change": -0.0078
        },
        {
            "Symbol": "UNP",
            "Change": -0.0113
        },
        {
            "Symbol": "LOW",
            "Change": -0.013
        },
        {
            "Symbol": "BLK",
            "Change": 0.0014
        },
        {
            "Symbol": "SCHW",
            "Change": 0.0256
        },
        {
            "Symbol": "GS",
            "Change": 0.0177
        },
        {
            "Symbol": "SBUX",
            "Change": -0.0006
        },
        {
            "Symbol": "AXP",
            "Change": 0.0047
        },
        {
            "Symbol": "AMD",
            "Change": -0.0103
        },
        {
            "Symbol": "SONY",
            "Change": 0.0275
        },
        {
            "Symbol": "SNY",
            "Change": -0.0059
        },
        {
            "Symbol": "BA",
            "Change": 0.0093
        },
        {
            "Symbol": "RTX",
            "Change": 0.0055
        },
        {
            "Symbol": "AMT",
            "Change": -0.0136
        },
        {
            "Symbol": "AMGN",
            "Change": -0.0056
        },
        {
            "Symbol": "IBM",
            "Change": 0.0016
        },
        {
            "Symbol": "ISRG",
            "Change": 0.0006
        },
        {
            "Symbol": "TD",
            "Change": -0.0015
        },
        {
            "Symbol": "NOW",
            "Change": 0.0039
        },
        {
            "Symbol": "SQ",
            "Change": -0.001
        },
        {
            "Symbol": "TGT",
            "Change": -0.0074
        },
        {
            "Symbol": "PDD",
            "Change": 0.2225
        },
        {
            "Symbol": "RIO",
            "Change": 0.0286
        },
        {
            "Symbol": "EL",
            "Change": 0.0039
        },
        {
            "Symbol": "AMAT",
            "Change": -0.0004
        },
        {
            "Symbol": "BUD",
            "Change": -0.002
        },
        {
            "Symbol": "JD",
            "Change": 0.1444
        },
        {
            "Symbol": "SNAP",
            "Change": -0.0115
        }

];

export default exampleList;