const data = [
    {
        "norlpdkllfhf": "evwbkwcjjnugbb",
        "cpwkleli": 5,
        "hkiktv": 1,
        "mjpeodvkha": 44.00168290133539,
        "ifptplfntow": "kmeglseu",
        "ierrnkd": 63.90660758473186,
        "nusdvct": {
            "ubbnbchvpa": 6,
            "fkutke": 7.919195652484734,
            "fcjlnuensrubb": 85.0375109267348,
            "jrogbvcvkfn": {
                "hkocgjgpn": 4,
                "mkeictgf": {
                    "pdkrfbt": {
                        "ubwrnmakcn": "ngsbsvdvu",
                        "tbvfktdfluvu": 1,
                        "rfvwuepmfu": {
                            "nbfnmwiu": 8.670457320400327,
                            "nhldnggt": {
                                "llmbeihjegfgp": 91.06812910199977
                            },
                            "prndwclipu": 6,
                            "fmtib": "uefmmsk"
                        }
                    },
                    "lvbcvndfvv": "cjphcvnvr"
                },
                "fsrkourlml": {
                    "kvdecudd": 84.26234559930109,
                    "dsavvdlnv": 6,
                    "ldpbfukbn": "jpvhfjk"
                },
                "tevlcfva": 5,
                "nlddshomdsnj": "nkecnupo"
            }
        }
    },
    {
        "norlpdkllfhf": "evwbkwcjjnugbb",
        "cpwkleli": 5,
        "hkiktv": 1,
        "mjpeodvkha": 44.00168290133539,
        "ifptplfntow": "kmeglseu",
        "ierrnkd": 63.90660758473186,
        "nusdvct": {
            "ubbnbchvpa": 6,
            "fkutke": 7.919195652484734,
            "fcjlnuensrubb": 85.0375109267348,
            "jrogbvcvkfn": {
                "hkocgjgpn": 4,
                "mkeictgf": {
                    "pdkrfbt": {
                        "ubwrnmakcn": "ngsbsvdvu",
                        "tbvfktdfluvu": 1,
                        "rfvwuepmfu": {
                            "nbfnmwiu": 8.670457320400327,
                            "nhldnggt": {
                                "llmbeihjegfgp": {
                                    "upxd": 11
                                }
                            },
                            "prndwclipu": 6,
                            "fmtib": "uefmmsk"
                        }
                    },
                    "lvbcvndfvv": "cjphcvnvr"
                },
                "fsrkourlml": {
                    "kvdecudd": 84.26234559930109,
                    "dsavvdlnv": 6,
                    "ldpbfukbn": "jpvhfjk"
                },
                "tevlcfva": 5,
                "nlddshomdsnj": "nkecnupo"
            }
        }
    },
    {
        "ortbvmpukn": 58.31006729339268,
        "tntmo": 25.71337617245355,
        "gilwupo": 64.58810661470852,
        "suveibcut": 10.783100185403294
    },
    {
        "ortbvmpukn2": 58.31006729339268,
        "tntmo": 25.71337617245355,
        "gilwupo2": 64.58810661470852,
        "suveibcut2": 10.783100185403294
    },
    {
        "laakekjd": 87.5982917940387
    },
    {
        "la": 2
    },
    {
        "srakkdpuip": "wiai",
        "afevewn": "jaogdgpc"
    },
    {
        "srakkdpuip": "wiaigcdttakh",
        "afevewn": "jaoggppc"
    }
]

const data2=[
    {
        "meta": {
            "colors": {
                "primary": "#fff",
                "secondary": "#000"
            },
            "description": "obj1"
        }
    },
    {
        "meta": {
            "colors": {
                "secondary": {
                    "red": 255,
                    "green": 123,
                    "blue": 11
                }
            },
            "description": "empty"
        },
        "id": 10
    },
    {
        "any": {
            "books": {
                "0": {
                    "hello": "ocean"
                }
            }
        }
    },
    {
        "any": {
            "books": [
                {
                    "hello": "world"
                }
            ]
        }
    },
    {
        "vehicle": {
            "wheel": 3,
            "capacity": 4
        }
    },
    {
        "vehicle": {
            "wheel": 2,
            "capacity": 2
        }
    }
]


function longestCommonPath(obj1, obj2) {
    // Hàm tạo ra các đường dẫn
    function generatePaths(obj, currentPath, paths) {
        for (let key in obj) {
            let newPath = currentPath ? currentPath + '.' + key : key;
            paths.push(newPath);
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                generatePaths(obj[key], newPath, paths);
            }
        }
    }

    // Tạo ra các đường dẫn cho cả hai đối tượng
    let paths1 = [];
    let paths2 = [];
    generatePaths(obj1, '', paths1);
    generatePaths(obj2, '', paths2);

    // Tìm các đường dẫn chung
    let commonPaths = paths1.filter(path => paths2.includes(path));

    // Nếu không có đường dẫn chung, trả về "..."
    if (commonPaths.length === 0) {
        return "...";
    }

    // Sắp xếp các đường dẫn chung theo độ dài (sâu) và sau đó theo thứ tự bảng chữ cái
    commonPaths.sort((a, b) => {
        let aLength = a.split('.').length;
        let bLength = b.split('.').length;
        if (aLength !== bLength) {
            return bLength - aLength; // Sắp xếp giảm dần theo độ dài
        }
        return a.localeCompare(b); // Sắp xếp theo thứ tự bảng chữ cái nếu cùng độ dài
    });

    // Trả về đường dẫn chung dài nhất
    return commonPaths[0];
}

function processCases(data2) {
    let confs = [];
    for (let i = 0; i < data2.length; i++) {
        const conf = data2[i];
        if (typeof conf === 'object') {
            confs.push(conf);
            if (confs.length === 2) {
                const common = longestCommonPath(confs[0], confs[1]);
                console.log(common);
                confs = [];
            }
        }
    }
}


processCases(data2);
