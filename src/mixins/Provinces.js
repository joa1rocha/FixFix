
export default {
    methods: {
        searchCode (postalCode) {
            postalCode = postalCode.toString();

            if (!this.isValidFormat(postalCode)) return false
        
            var code = Number(postalCode.replace('-', ''))
        
            if (code >= 1000001 && code <= 1999002) return 'Lisboa'
            if (code >= 2000005 && code <= 2040999) return 'Santarem'
            if (code >= 2050001 && code <= 2065998) return 'Lisboa'
            if (code >= 2070001 && code <= 2395999) return 'Santarem'
            if (code >= 2400013 && code <= 2434001) return 'Leiria'
            if (code >= 2435001 && code <= 2435999) return 'Santarem'
            if (code >= 2440001 && code <= 2485999) return 'Leiria'
            if (code >= 2490001 && code <= 2490999) return 'Santarem'
            if (code >= 2495011 && code <= 2495251) return 'Leiria'
            if (code >= 2495300 && code <= 2495675) return 'Santarem'
            if (code >= 2499001 && code <= 2525999) return 'Leiria'
            if (code >= 2530001 && code <= 2530999) return 'Lisboa'
            if (code >= 2540001 && code <= 2540999) return 'Leiria'
            if (code >= 2550005 && code <= 2799562) return 'Lisboa'
            if (code >= 2800001 && code <= 2890355) return 'Setubal'
            if (code >= 2890401 && code <= 2890405) return 'Santarem'
            if (code >= 2890486 && code <= 2965327) return 'Setubal'
            if (code >= 2965401 && code <= 2965443) return 'Evora'
            if (code >= 2965498 && code <= 2985999) return 'Setubal'
            if (code >= 3000001 && code <= 3049003) return 'Coimbra'
            if (code >= 3050006 && code <= 3054003) return 'Aveiro'
            if (code >= 3060001 && code <= 3094003) return 'Coimbra'
            if (code >= 3100009 && code <= 3105999) return 'Leiria'
            if (code >= 3130001 && code <= 3234001) return 'Coimbra'
            if (code >= 3240101 && code <= 3280999) return 'Leiria'
            if (code >= 3300010 && code <= 3420999) return 'Coimbra'
            if (code >= 3430001 && code <= 3560999) return 'Viseu'
            if (code >= 3570001 && code <= 3570999) return 'Guarda'
            if (code >= 3600011 && code <= 3640308) return 'Viseu'
            if (code >= 3640999 && code <= 3684001) return 'Viseu'
            if (code >= 3700008 && code <= 3885999) return 'Aveiro'
            if (code >= 4000007 && code <= 4495630) return 'Porto'
            if (code >= 4500001 && code <= 4505998) return 'Aveiro'
            if (code >= 4510001 && code <= 4515707) return 'Porto'
            if (code >= 4520011 && code <= 4550999) return 'Aveiro'
            if (code >= 4560001 && code <= 4615763) return 'Porto'
            if (code >= 4615801 && code <= 4620006) return 'Braga'
            if (code >= 4620007 && code <= 4620519) return 'Porto'
            if (code >= 4620520 && code <= 4620522) return 'Braga'
            if (code >= 4620524 && code <= 4620582) return 'Braga'
            if (code >= 4620583 && code <= 4620586) return 'Porto'
            if (code >= 4620589 && code <= 4620593) return 'Braga'
            if (code >= 4620595 && code <= 4620602) return 'Braga'
            if (code >= 4620603 && code <= 4620635) return 'Porto'
            if (code >= 4620637 && code <= 4650999) return 'Porto'
            if (code >= 4660011 && code <= 4690999) return 'Viseu'
            if (code >= 4700001 && code <= 4740999) return 'Braga'
            if (code >= 4745010 && code <= 4745999) return 'Porto'
            if (code >= 4750001 && code <= 4775999) return 'Braga'
            if (code >= 4780001 && code <= 4795999) return 'Porto'
            if (code >= 4800001 && code <= 4824501) return 'Braga'
            if (code >= 4825001 && code <= 4825516) return 'Porto'
            if (code >= 4830004 && code <= 4860999) return 'Braga'
            if (code >= 4870011 && code <= 4880999) return 'Vila Real'
            if (code >= 4890011 && code <= 4890999) return 'Braga'
            if (code >= 4900001 && code <= 4904882) return 'Viana do Castelo'
            if (code >= 4905009 && code <= 4905043) return 'Braga'
            if (code >= 4905044 && code <= 4905046) return 'Viana do Castelo'
            if (code >= 4905047 && code <= 4905167) return 'Braga'
            if (code >= 4905188 && code <= 4990999) return 'Viana do Castelo'
            if (code >= 5000011 && code <= 5030999) return 'Vila Real'
            if (code >= 5040011 && code <= 5040077) return 'Porto'
            if (code >= 5040102 && code <= 5090999) return 'Vila Real'
            if (code >= 5100001 && code <= 5130999) return 'Viseu'
            if (code >= 5140011 && code <= 5140999) return 'Bragança'
            if (code >= 5150011 && code <= 5155999) return 'Guarda'
            if (code >= 5160003 && code <= 5385999) return 'Bragança'
            if (code >= 5400001 && code <= 5470999) return 'Vila Real'
            if (code >= 6000000 && code <= 6030999) return 'Castelo Branco'
            if (code >= 6040011 && code <= 6050999) return 'Portalegre'
            if (code >= 6060011 && code <= 6110999) return 'Castelo Branco'
            if (code >= 6120011 && code <= 6120999) return 'Santarem'
            if (code >= 6150011 && code <= 6250174) return 'Castelo Branco'
            if (code >= 6250181 && code <= 6250191) return 'Guarda'
            if (code >= 6250998 && code <= 6250999) return 'Castelo Branco'
            if (code >= 6260011 && code <= 6320181) return 'Guarda'
            if (code >= 6320191 && code <= 6320192) return 'Castelo Branco'
            if (code >= 6320201 && code <= 6440999) return 'Guarda'
            if (code >= 7000000 && code <= 7220999) return 'Evora'
            if (code >= 7230001 && code <= 7230999) return 'Beja'
            if (code >= 7240011 && code <= 7250999) return 'Evora'
            if (code >= 7300001 && code <= 7480999) return 'Portalegre'
            if (code >= 7490010 && code <= 7490999) return 'Evora'
            if (code >= 7500011 && code <= 7595999) return 'Setubal'
            if (code >= 7600010 && code <= 7960999) return 'Beja'
            if (code >= 8000072 && code <= 8970999) return 'Faro'
            if (code >= 9000001 && code <= 9385303) return 'Ilha da Madeira'
            if (code >= 9400001 && code <= 9400999) return 'Ilha de Porto Santo'
            if (code >= 9500010 && code <= 9560999) return 'Ilha de Sao Miguel'
            if (code >= 9580011 && code <= 9580999) return 'Ilha de Santa Maria'
            if (code >= 9600011 && code <= 9684001) return 'Ilha de Sao Miguel'
            if (code >= 9700009 && code <= 9760999) return 'Ilha Terceira'
            if (code >= 9800011 && code <= 9875999) return 'Ilha Sao Jorge'
            if (code >= 9880011 && code <= 9880999) return 'Ilha da Graciosa'
            if (code >= 9900011 && code <= 9904857) return 'Ilha do Faial'
            if (code >= 9930011 && code <= 9950543) return 'Ilha do Pico'
            if (code >= 9950999 && code <= 9970999) return 'Ilha das Flores'
            if (code >= 9980010 && code <= 9980999) return 'Ilha do Corvo'
            if (code === 2495998) return 'Leiria'
            if (code === 2495999) return 'Santarem'
            if (code === 4620523) return 'Porto'
            if (code === 3640700) return 'Guarda'
            if (code === 4620587) return 'Braga'
            if (code === 4620588) return 'Porto'
            if (code === 4620594) return 'Porto'
            if (code === 4620636) return 'Braga'
        },
        
        isValidFormat(postalCode) {
            if (!postalCode) return false
            var regex = /^\d{4}-\d{3}$/
            return postalCode.match(regex)
        
        },

        getCities() {
            return [
                "Lisboa",
                "Santarem",
                "Leiria",
                "Setubal",
                "Evora",
                "Coimbra",
                "Aveiro",
                "Viseu",
                "Guarda",
                "Porto",
                "Braga",
                "Vila Real",
                "Viana do Castelo",
                "Bragança",
                "Castelo Branco",
                "Portalegre",
                "Beja",
                "Faro",
                "Ilha da Madeira",
                "Ilha de Porto Santo",
                "Ilha de Sao Miguel",
                "Ilha de Santa Maria",
                "Ilha Terceira",
                "Ilha Sao Jorge",
                "Ilha da Graciosa",
                "Ilha do Faial",
                "Ilha do Pico",
                "Ilha das Flores",
                "Ilha do Corvo",
            ]
        }
    }
}
