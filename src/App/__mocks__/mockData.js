import { FETCH_DOCUMENTS_QUERY } from "../../fetchDocumentsQuery";

const mockData = [
  {
    request: {
      query: FETCH_DOCUMENTS_QUERY,
      variables: { documentId: "Y8wDM" },
    },
    result: {
      data: {
        share: {
          __typename: "Share",
          shortId: "e981971c-ff57-46dc-a932-a60dc1804992",
          version: {
            __typename: "Version",
            document: {
              __typename: "Document",
              artboards: {
                __typename: "Artboards",
                entries: [
                  {
                    __typename: "Artboard",
                    files: [
                      {
                        __typename: "File",
                        height: 808,
                        scale: 1,
                        thumbnails: [
                          {
                            __typename: "Thumbnail",
                            height: 334,
                            url:
                              "https://resources-live.sketch.cloud/files/abbb4734-7963-414c-8f09-108988579905.m.png?Expires=1600822800&Signature=eU1QVf6veL48MBYkTQ2t95kqUvmyKoeZ1~7VE7-w4a8R07AeAZ5b-0nytFPUQBnOBhj8Hxc4ThyL4y6ANfuhOpX5V39QajDrsnYB3Vo56NXUnWDqNlICQKgYE3cHTI4sUyZ0OwHejKLfFUQp2I6R4a5vMxORjm3I77rCGpR-ebI_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                            width: 250,
                          },
                        ],
                        url:
                          "https://resources-live.sketch.cloud/files/abbb4734-7963-414c-8f09-108988579905.png?Expires=1600822800&Signature=O8wHxuIbtZHiQlwOUqt5D3NTZS50QqaZhjsz-8xDkKZ9AREb~NZlzLIiHJUVZdH0WS-TOW0y3RT9CpofG0O3eXRiod8nl3~KKQbDqQDXbKkla-MAl0EhFuZ10rjBOSwBBnfMSs0ijIXmtJvS4rMEBOHqqft614RnXN~-RAmxCZk_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                        width: 606,
                      },
                      {
                        __typename: "File",
                        height: 1616,
                        scale: 2,
                        thumbnails: [
                          {
                            __typename: "Thumbnail",
                            height: 1616,
                            url:
                              "https://resources-live.sketch.cloud/files/0654252f-9f8c-4d43-ad08-b556f7232641.png?Expires=1600822800&Signature=m~9f7QMEqzu0eBVcjTzk1xy63mgfQGeOmHFRw1XbmEPruBbSTzxsJRTSnxZ01jp6HMCmmva3XddU7vsZE0q-lmnWjETI93J7Pgz9Ea1rYCJuEh4ChwS1wy9DGv5n29jkvlQq0qkPGwPLsk~5dkleKYdnprXweGpvD0ZQ8sNgcP0_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                            width: 1212,
                          },
                        ],
                        url:
                          "https://resources-live.sketch.cloud/files/0654252f-9f8c-4d43-ad08-b556f7232641.png?Expires=1600822800&Signature=m~9f7QMEqzu0eBVcjTzk1xy63mgfQGeOmHFRw1XbmEPruBbSTzxsJRTSnxZ01jp6HMCmmva3XddU7vsZE0q-lmnWjETI93J7Pgz9Ea1rYCJuEh4ChwS1wy9DGv5n29jkvlQq0qkPGwPLsk~5dkleKYdnprXweGpvD0ZQ8sNgcP0_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                        width: 1212,
                      },
                    ],
                    isArtboard: true,
                    name: "Xerox alto",
                  },
                  {
                    __typename: "Artboard",
                    files: [
                      {
                        __typename: "File",
                        height: 880,
                        scale: 1,
                        thumbnails: [
                          {
                            __typename: "Thumbnail",
                            height: 205,
                            url:
                              "https://resources-live.sketch.cloud/files/3bf6e61f-d06d-4bc0-820b-2c5f60d2750c.m.png?Expires=1600822800&Signature=lVToldPxb9VL4NwNksCOT0Fe0~ZZuhr20jwXvswS0oD0YT6~1Za5S47l2ONe1~jPSyM31YuTc7txlcZHppOcS6vAg7YotXPAwQSCYI7-QTazIRwbpXWocFyHaywt5sYBrS7opvj-2jfyFNbYfbE-1gFADekeyNgpvbLk7YVQgW0_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                            width: 250,
                          },
                          {
                            __typename: "Thumbnail",
                            height: 613,
                            url:
                              "https://resources-live.sketch.cloud/files/3bf6e61f-d06d-4bc0-820b-2c5f60d2750c.l.png?Expires=1600822800&Signature=k7IlWWDXlEAxGuP1IKpysfw8GaqKBJ2bOE0LqmhN5RjmM1RyJji1othMGvq2ZIG95eOJ12zjcLSDo~wwXPRmpGfuE9EIK6wC3p3xNXJmDOcO3IWqIU1UzQX0lDXb9JKUogciJMyw2h2ZNFNuLm~A6nBHUR-mDww7Tu4kOc5wmqY_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                            width: 750,
                          },
                        ],
                        url:
                          "https://resources-live.sketch.cloud/files/3bf6e61f-d06d-4bc0-820b-2c5f60d2750c.png?Expires=1600822800&Signature=rAwLyovqVVQ~8PMZEgKrNR5coVWR18uuBcjz7cs~R9Sm8N~ooOf7OA9Xm221ErnwzMgkbSyH8U7PrW7X~osXC~5JIkiJpmCfjdihm4OT0EsdRugNh0TYAdXBbNlPN4yvKu7zSeBpshYqw5vVFrq3F1YUKBT0eEEDCd5Q2ty3D-0_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                        width: 1077,
                      },
                      {
                        __typename: "File",
                        height: 1760,
                        scale: 2,
                        thumbnails: [
                          {
                            __typename: "Thumbnail",
                            height: 1760,
                            url:
                              "https://resources-live.sketch.cloud/files/fe89edd9-bca3-4286-b32f-2d0e9fcdeb64.png?Expires=1600822800&Signature=MzROimMa0jXgtSwo~hqfgaaJaHzARoDkHntyaQMZPgkAbxUdOiJvQPP60a7AH8thB3R2GblJBh7sYDcCYYolAuriHrjpQS2q8n~G6DQttyaBNyiNHpx3vbRex-yYRzI2pETzywiiW0DJyhLOoV82rDL125~A6h39NHtqAG~NTGU_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                            width: 2154,
                          },
                        ],
                        url:
                          "https://resources-live.sketch.cloud/files/fe89edd9-bca3-4286-b32f-2d0e9fcdeb64.png?Expires=1600822800&Signature=MzROimMa0jXgtSwo~hqfgaaJaHzARoDkHntyaQMZPgkAbxUdOiJvQPP60a7AH8thB3R2GblJBh7sYDcCYYolAuriHrjpQS2q8n~G6DQttyaBNyiNHpx3vbRex-yYRzI2pETzywiiW0DJyhLOoV82rDL125~A6h39NHtqAG~NTGU_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                        width: 2154,
                      },
                    ],
                    isArtboard: true,
                    name: "Etch a Sketch",
                  },
                  {
                    __typename: "Artboard",
                    files: [
                      {
                        __typename: "File",
                        height: 2133,
                        scale: 1,
                        thumbnails: [
                          {
                            __typename: "Thumbnail",
                            height: 445,
                            url:
                              "https://resources-live.sketch.cloud/files/aad31a24-b2e3-4115-88e8-5d60a3869246.m.png?Expires=1600822800&Signature=g6SVJYsdFRP0IE-~RaSPf8HNewptNaf75MY50q2TjVhJaxbEUQQF2qbS7Kq235SMyJx4lJQI1VMVINfkQ1YeGRWRgSLfscDDW7vlyGmHFaXTB0BRB~LqkJsIR00KH7as9GWP9TM9JnfId8UoQFo09RYt911ZkliGQ8YLvFd6hfI_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                            width: 250,
                          },
                          {
                            __typename: "Thumbnail",
                            height: 1334,
                            url:
                              "https://resources-live.sketch.cloud/files/aad31a24-b2e3-4115-88e8-5d60a3869246.l.png?Expires=1600822800&Signature=G2~8F0R4rpfH~qBa4Eqa53O2MJd0iocDuRN68ZK1WlzW6AJEWDAAV8Y5kBK3Qm-GpYhbib4YU2lbNM21dZ0~YkDRwiwNVhbBPEH3vBePORMfRl0dWWtMcQZEa1qrYFZZFYiAD5N8iu-ePeT72Wr~vCcYt8c4BJ93632lfpOMOJ4_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                            width: 750,
                          },
                        ],
                        url:
                          "https://resources-live.sketch.cloud/files/aad31a24-b2e3-4115-88e8-5d60a3869246.png?Expires=1600822800&Signature=nw-iXpXXHqJ1R3OLnzdAOdWKB2M71NtMsRPLo1g1CL1WUwW4VthNNjKvbZg77KllnEBFmLCXcxgqnU~FQUT-YF5iAvNh96T5myv0OCtYgzPwRF2iDL2LdQkcuZ75Zuc~1u5MsGmyXvgMDFubcsxz2r-mRoAtq9h17j1rli5b~pc_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                        width: 1200,
                      },
                      {
                        __typename: "File",
                        height: 4266,
                        scale: 2,
                        thumbnails: [
                          {
                            __typename: "Thumbnail",
                            height: 4266,
                            url:
                              "https://resources-live.sketch.cloud/files/cd026b7e-2f71-4a00-87ce-3b706b4b5cdd.png?Expires=1600822800&Signature=mQ2wpEA056~V~PLrpgEKBsgFHeKowP-bvO2EFq1tTccOxXi2~Q55Aftawsl-hhQvkAlChiuU2PCGCETJWtTXg~R6K6MSqSt5iKFuEsDh7Mz5nzb6QRDMG35d-neZGfjcVjUE5QVAfyYk9BP~XUdz3OlsPU3Tcvm1KH-ltW3~Tss_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                            width: 2400,
                          },
                        ],
                        url:
                          "https://resources-live.sketch.cloud/files/cd026b7e-2f71-4a00-87ce-3b706b4b5cdd.png?Expires=1600822800&Signature=mQ2wpEA056~V~PLrpgEKBsgFHeKowP-bvO2EFq1tTccOxXi2~Q55Aftawsl-hhQvkAlChiuU2PCGCETJWtTXg~R6K6MSqSt5iKFuEsDh7Mz5nzb6QRDMG35d-neZGfjcVjUE5QVAfyYk9BP~XUdz3OlsPU3Tcvm1KH-ltW3~Tss_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                        width: 2400,
                      },
                    ],
                    isArtboard: true,
                    name: "Android",
                  },
                  {
                    __typename: "Artboard",
                    files: [
                      {
                        __typename: "File",
                        height: 1920,
                        scale: 1,
                        thumbnails: [
                          {
                            __typename: "Thumbnail",
                            height: 445,
                            url:
                              "https://resources-live.sketch.cloud/files/adb77083-d446-431c-962b-4f9875e4290f.m.png?Expires=1600822800&Signature=bZTl7-MQdJYYAyCOKwy9g~9OkBEr6UEeSreUBFor5huanabdPgnW2Rz3Nsz9MbJSaBbnZ7b7J9fMwRNN9vXERHuadq8A2UIJ66E60IxaTElQb8~mNG~rAgt2gpPMcX10LQQ6EbSmjjhnW1JKli-RrAvZzBJuAwL784BVpp45ukc_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                            width: 250,
                          },
                          {
                            __typename: "Thumbnail",
                            height: 1334,
                            url:
                              "https://resources-live.sketch.cloud/files/adb77083-d446-431c-962b-4f9875e4290f.l.png?Expires=1600822800&Signature=n9PFnwodbzjy2gKlMWxsvAeu0Af8hzA2VBh1wzqDgtVD6NUZR8ABA8WzdeTYzuqTOWQUHjEDXPKNqdi5i~HbxvFpgHVa9rOdFKDOW3tJcYbubCELE2x~jB~1eKtCe~aO7VDkm91NXZyB-Oz500vtiO7pRnY43~MaQfUjoYot2FI_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                            width: 750,
                          },
                        ],
                        url:
                          "https://resources-live.sketch.cloud/files/adb77083-d446-431c-962b-4f9875e4290f.png?Expires=1600822800&Signature=vSC-5GaPfq1KszU-FuqXsJzys4xkYe8M-RnxsuaeQHh7fDhjAm1xLxaWnkAkOUQtxHamIobdPwgjE-zb-QZKPn7ysqgZ~sXQy3F8wi3tbkY3sKT2Fr8rCtXgt1cwfTLYEpmlm2P~yolq4uwlQqUOPAWQvHSetUl2qIVOtDqoVvE_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                        width: 1080,
                      },
                      {
                        __typename: "File",
                        height: 3840,
                        scale: 2,
                        thumbnails: [
                          {
                            __typename: "Thumbnail",
                            height: 3840,
                            url:
                              "https://resources-live.sketch.cloud/files/4f1b1463-e384-4def-96f1-f50140ff1a2a.png?Expires=1600822800&Signature=C7UDE2~HlAGQLns8axb~eUd~duAktXF5ft8c5IbP9k05vbo5nbDTR~V1FBiWEkL0ZQnz7vnJHeqKo3x2eLoF7rwDfY-hpUSDP5WRzG4oL1UB9xR1I2Al-0EoXK~MD3ZHo8cH0kWjfwAC2vLwFYkbcm81TVbeGMFR5BWxL5JATtI_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                            width: 2160,
                          },
                        ],
                        url:
                          "https://resources-live.sketch.cloud/files/4f1b1463-e384-4def-96f1-f50140ff1a2a.png?Expires=1600822800&Signature=C7UDE2~HlAGQLns8axb~eUd~duAktXF5ft8c5IbP9k05vbo5nbDTR~V1FBiWEkL0ZQnz7vnJHeqKo3x2eLoF7rwDfY-hpUSDP5WRzG4oL1UB9xR1I2Al-0EoXK~MD3ZHo8cH0kWjfwAC2vLwFYkbcm81TVbeGMFR5BWxL5JATtI_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                        width: 2160,
                      },
                    ],
                    isArtboard: true,
                    name: "Android 4",
                  },
                  {
                    __typename: "Artboard",
                    files: [
                      {
                        __typename: "File",
                        height: 384,
                        scale: 1,
                        thumbnails: [
                          {
                            __typename: "Thumbnail",
                            height: 134,
                            url:
                              "https://resources-live.sketch.cloud/files/62ac50b1-4eca-4c5e-99ff-ad064ed1641f.m.png?Expires=1600822800&Signature=TevTr95jXlhksOjLlzh60-6Z7pjAfvnYIGKzeIU9WC0yy38gsSPsTQa2splTg1cpXBrAWL0IgFIwVjurbrVdmBHo9NOCrgJFz025O1FcDAsezhGgONEZHL8BMYJl62hbQalylkKTF90a3MgnQbINbJY8MiyrhG~E6ePZCrMty84_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                            width: 250,
                          },
                        ],
                        url:
                          "https://resources-live.sketch.cloud/files/62ac50b1-4eca-4c5e-99ff-ad064ed1641f.png?Expires=1600822800&Signature=EfR0obubmKyHsGrMbd5mGCSufj1wy6Gxw7wDWxxECLKWSQF-uxKlPQLPl~KHGHsus~VahZxM7dWYJTYWyN8eaDr8W2FqkP7QnjjbEax8hJ03uoa8nqlP-g2690F7xJk1uHon9yqB-6aS7VC8-iBLxcZN-WRxTTijzhjdWlyOADw_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                        width: 720,
                      },
                      {
                        __typename: "File",
                        height: 768,
                        scale: 2,
                        thumbnails: [
                          {
                            __typename: "Thumbnail",
                            height: 768,
                            url:
                              "https://resources-live.sketch.cloud/files/284b83d6-6466-4b7e-b1ff-6b0f8ca231ea.png?Expires=1600822800&Signature=HRsASJ7HDkmf-WmKbCsmUGmgD259FYBPmsdeajpr1gd~cVSsp3yd8dL8mEKlAod3qmSVEryl-kDgDhdIR5ZkyJwqtikvfzXDhfoVugvP~rRKfJd-9IQuHdyj24TnPh2~NTVcnfCGQnebBoH8VqDluKbYQ24UnWKOY~LAiBaZ96g_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                            width: 1440,
                          },
                        ],
                        url:
                          "https://resources-live.sketch.cloud/files/284b83d6-6466-4b7e-b1ff-6b0f8ca231ea.png?Expires=1600822800&Signature=HRsASJ7HDkmf-WmKbCsmUGmgD259FYBPmsdeajpr1gd~cVSsp3yd8dL8mEKlAod3qmSVEryl-kDgDhdIR5ZkyJwqtikvfzXDhfoVugvP~rRKfJd-9IQuHdyj24TnPh2~NTVcnfCGQnebBoH8VqDluKbYQ24UnWKOY~LAiBaZ96g_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                        width: 1440,
                      },
                    ],
                    isArtboard: true,
                    name: "Win 1984",
                  },
                  {
                    __typename: "Artboard",
                    files: [
                      {
                        __typename: "File",
                        height: 768,
                        scale: 1,
                        thumbnails: [
                          {
                            __typename: "Thumbnail",
                            height: 188,
                            url:
                              "https://resources-live.sketch.cloud/files/867a3cdf-60ae-4bcc-a958-b2d4b1a6e51f.m.png?Expires=1600822800&Signature=kzdBgp0EdOpcwTNnheG7-J1OpeVFVJPz2Sm54F2AowF8yKSar-aI8mEvPUA7nfagQ5hTYq~6wMMY1O2wfu5I5pHicuM27I~Pay86Jc9ZNmMJ~dEV906QJhO1WutNA5iDAFXesiZyAIiSk0lYg6WTHmF0GsJDn3att4W~q8bSRM0_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                            width: 250,
                          },
                          {
                            __typename: "Thumbnail",
                            height: 563,
                            url:
                              "https://resources-live.sketch.cloud/files/867a3cdf-60ae-4bcc-a958-b2d4b1a6e51f.l.png?Expires=1600822800&Signature=nBozatAJFgX4zUZsWTypbYKtZJ2Thm0RXVk~NqYXdnD9Wu3gSfkXIqSf-mdUZq40n6EdJNLJ-h7MHDsSpbc5N9ybtEEjKaKePGo3BTfDuiB4Lw6b-CiYgbjxQcXhqDupqiJ6Zj-9xriC3aLI~sTcCefAnNxdFaiuTB1yGjxONN8_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                            width: 750,
                          },
                        ],
                        url:
                          "https://resources-live.sketch.cloud/files/867a3cdf-60ae-4bcc-a958-b2d4b1a6e51f.png?Expires=1600822800&Signature=RrQQ2bbvdGWQmNOPUyjGV1mIugj~CxzzZewaTQAsuNkAtUmZm-3zg1IkZ8XhMhJXUkUxhGvFbJ-lHWnOfuiHwtLfNdOd1JnReroN0SP3RGqDliXmfHRlycCJQrifSsd1U3LedUAXvdm957WxNej6TVyhiPj1~XB9gDKpcxKnReE_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                        width: 1024,
                      },
                      {
                        __typename: "File",
                        height: 1536,
                        scale: 2,
                        thumbnails: [
                          {
                            __typename: "Thumbnail",
                            height: 1536,
                            url:
                              "https://resources-live.sketch.cloud/files/4e17e9c7-b62c-40fa-b5b7-4ddf4152f3f9.png?Expires=1600822800&Signature=tJAzHxwkKe4K93Ay8xDyFrhVv4Nv2be-eDPs40NL4zA22IZeeUKT4tHBvggheT93hZe2iR-mEkXzLmNdXLq95aB93YL98Z-5DP62K4VBg~k2MQicvuDQdi9b7nxSWRzlYfBbc8g~iwu3Czlc9vjNC3S06mRAkL2NHFRs9tR1WKk_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                            width: 2048,
                          },
                        ],
                        url:
                          "https://resources-live.sketch.cloud/files/4e17e9c7-b62c-40fa-b5b7-4ddf4152f3f9.png?Expires=1600822800&Signature=tJAzHxwkKe4K93Ay8xDyFrhVv4Nv2be-eDPs40NL4zA22IZeeUKT4tHBvggheT93hZe2iR-mEkXzLmNdXLq95aB93YL98Z-5DP62K4VBg~k2MQicvuDQdi9b7nxSWRzlYfBbc8g~iwu3Czlc9vjNC3S06mRAkL2NHFRs9tR1WKk_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
                        width: 2048,
                      },
                    ],
                    isArtboard: true,
                    name: "Windows Vista",
                  },
                ],
              },
              name: "Screens",
            },
          },
        },
      },
    },
  },
];

export default mockData;
