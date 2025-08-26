const traitsData = [
    { 
        name: "Acne vulgaris", 
        definition: "Acne vulgaris is a common inflammatory skin disorder affecting >85% of adolescents. It involves androgen‑stimulated sebum overproduction, follicular hyperkeratinisation, microbiome dysbiosis and inflammation. Genetics, diet (high glycemic foods, dairy) and stress influence severity. Treatment requires comprehensive counselling and realistic expectations.",
        variants: "13.5 million variants",
        loci: "44 loci",
        genes: "(43) ADAMTS18, ANKRD55, BCL11A, BORCS5, C8orf48,etc.",
        bibliography: [
            "Mitchel B.L, Saklatvala J.R, et al. Genome-wide association meta-analysis identifies 29 new acne susceptibility loci. Nature Communications, 07 Feb 2022, 13(1):702",
            "Amita H., Sadia M., et al. Acne Vulgaris. StatPearls [Internet].",
            "Linda K., Alan B., et al. Acne Vulgaris: Diagnosis and Treatment. Am Fam Physician. 2019;100(8):475-484"
        ]
    },
    { 
        name: "Alanine aminotransferase levels", 
        definition: "ALT is a hepatic enzyme that catalyzes amino acid metabolism. Elevated serum levels indicate liver damage from various causes (alcohol, NAFLD, viral hepatitis, drugs, genetic disorders). While sensitive for liver injury, ALT is non‑specific and requires clinical correlation.",
        variants: "13.5 million variants",
        loci: "334 loci",
        genes: "(401) ABCA1, ABCB11, ABCB4, ABCC2, ABCG5,etc.",
        bibliography: [
            "Barton AR, Sherman MA, Mukamel RE, et al. Whole-exome imputation within UK Biobank powers rare coding variant association and fine-mapping analyses. Nat Genet. 2021 Aug;53(8):1260-1269.",
            "Moriles KE, Zubair M, Azer SA. Alanine Aminotransferase (ALT) Test. 2024 Feb 27. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2024 Jan–.",
            "van Beek JH, de Moor MH, de Geus EJ, et al. The genetic architecture of liver enzyme levels: GGT, ALT and AST. Behav Genet. 2013 Jul;43(4):329-39. doi: 10.1007/s10519-013-9593-y. Epub 2013 Apr 12."
        ]
    },
    { 
        name: "Alcohol flush reaction", 
        definition: "Alcohol flush reaction results from inherited ALDH2 variants that impair acetaldehyde metabolism. This causes facial flushing, nausea and tachycardia after alcohol consumption. More common in Asian populations, it increases cancer risk due to acetaldehyde accumulation. Also called 'Asian flush'.",
        variants: "13.5 million variants",
        loci: "Multiple loci including ALDH2 variants",
        genes: "(1) ALDH2",
        bibliography: [
            "National Institute on Alcohol Abuse and Alcoholism. Alcohol Flush Reaction [May 2022]",
            "Cleveland Clinic. Alcohol Intolerance. [May 2022]",
            "Chen CC et al. Interaction between the functional polymorphisms of the alcohol-metabolism genes in protection against alcoholism. Am J Hum Genet. 1999 Sep;65(3):795-807."
        ]
    },

    { 
        name: "Alkaline phosphatase levels", 
        definition: "ALP is found in liver, bone, kidney and intestine, with highest levels in bone (osteoblasts) and liver (bile transport). Normal range 44-147 IU/L in adults. Elevated levels occur with bone growth, pregnancy, liver disease and bile obstruction.",
        variants: "13.5 million variants",
        loci: "261 loci",
        genes: "(364) AAAS, ABCA1, ABCC12, ABI2, ABO,etc.",
        bibliography: [
            "Barton AR, Sherman MA, et al. Whole-exome imputation within UK Biobank powers rare coding variant association and fine-mapping analyses. Nat Genet. 2021 Aug;53(8):1260-1269.",
            "Shi F, Zhao M, Zheng S, et al. Advances in genetic variation in metabolism-related fatty liver disease. Front Genet. 2023 Sep 11;14:1213916.",
            "Sookoian S, Pirola CJ. Liver enzymes, metabolomics and genome-wide association studies: from systems biology to the personalized medicine. World J Gastroenterol. 2015 Jan 21;21(3):711-25."
        ]
    },
    { 
        name: "Asparagus odor detection", 
        definition: "After eating asparagus, some people detect sulfur compounds (methanethiol, S‑methyl thioesters) in their urine. This ability varies genetically due to differences in olfactory receptor function. It represents a specific anosmia that affects ~40% of the population.",
        variants: "13.5 million variants",
        loci: "383 loci",
        genes: "(1) OR2M7",
        bibliography: [
            "Pelchat ML, Bykowski C, Duke FF, Reed DR. Excretion and Perception of a Characteristic Odor in Urine after Asparagus Ingestion: a Psychophysical and Genetic Study. Chem Senses, 2011; 36(1):9–17.",
            "Eriksson, Nicholas et al. Web-based, participant-driven studies yield novel genetic associations for common traits. PLoS genetics vol. 6,6 e1000993. 24 Jun. 2010."
        ]
    },
    { 
        name: "Aspartate aminotransferase levels", 
        definition: "AST is a key enzyme in amino acid metabolism found in liver, heart, muscle and kidney. Normal range 10-40 U/L. Elevated levels indicate tissue damage but are less liver‑specific than ALT. Interpretation requires clinical context and other diagnostic tests.",
        variants: "13.5 million variants",
        loci: "383 loci",
        genes: "(409) ABCA1, ABCA4, ABCB11, ABCC2, ABCG5,etc.",
        bibliography: [
            "Barton AR, Sherman MA, et al. Whole-exome imputation within UK Biobank powers rare coding variant association and fine-mapping analyses. Nat Genet. 2021 Aug;53(8):1260-1269.",
            "Shi F, Zhao M, Zheng S, et al. Advances in genetic variation in metabolism-related fatty liver disease. Front Genet. 2023 Sep 11;14:1213916.",
            "Sookoian S, Pirola CJ. Liver enzymes, metabolomics and genome-wide association studies: from systems biology to the personalized medicine. World J Gastroenterol. 2015 Jan 21;21(3):711-25."
        ]
    },
    { 
        name: "Basal metabolic rate", 
        definition: "BMR is the minimum energy needed at rest for vital functions (breathing, circulation, temperature regulation). It accounts for ~70% of daily caloric expenditure and varies with lean mass, age, sex, hormones and physical condition. Measurement requires strict criteria including physical/psychological tranquility.",
        variants: "13.5 million variants",
        loci: "722 loci",
        genes: "(1002) A3GALT2, ABCE1, ABHD17C, ACAN, ACOT12, etc.",
        bibliography: [
            "UK Biobank Database. Basal metabolic rate, Data-Field 23105 [Version Jan-2022]",
            "McMurray RG, Soares J, Caspersen CJ, McCurdy T. Examining variations of resting metabolic rate of adults: a public health perspective. Med Sci Sports Exerc. 2014 Jul;46(7):1352-8."
        ]
    },
    { 
        name: "Bilirubin levels", 
        definition: "Bilirubin is the breakdown product of heme from aged red blood cells. It's formed in macrophages, bound to albumin in plasma, then conjugated in the liver and excreted via bile. Serum levels indicate liver function and hemolysis; elevated levels suggest hepatic dysfunction or increased RBC destruction.",
        variants: "13.5 million variants",
        loci: "268 loci",
        genes: "(304) ABCB4, ABCC2, ABO, ADAR, ADH4,etc.",
        bibliography: [
            "Barton AR, Sherman MA, et al. Whole-exome imputation within UK Biobank powers rare coding variant association and fine-mapping analyses. Nat Genet. 2021 Aug;53(8):1260-1269.",
            "Shi F, Zhao M, Zheng S, et al. Advances in genetic variation in metabolism-related fatty liver disease. Front Genet. 2023 Sep 11;14:1213916.",
            "Sookoian S, Pirola CJ. Liver enzymes, metabolomics and genome-wide association studies: from systems biology to the personalized medicine. World J Gastroenterol. 2015 Jan 21;21(3):711-25."
        ]
    },
    { 
        name: "Birth weight", 
        definition: "Birth weight reflects gestational age and maternal health. Normal range 2.5-4 kg for term births (37-40 weeks). Low birth weight (<2.5 kg) increases perinatal morbidity and adult cardiovascular risk. High birth weight (macrosomia) associates with maternal diabetes/obesity and later metabolic disease.",
        variants: "13.5 million variants",
        loci: "145 loci",
        genes: "(212) ABCG1, ACTBL2, ACTL9, ADAM17, ADCY5,etc.",
        bibliography: [
            "Kids Health. Nemours Foundation [May 2022]",
            "American Academy of Pediatrics. Tracking Your Baby's Weight and Measurements [May 2022]",
            "Medline Plus. Birth Weight [May 2022]",
            "Warrington NM et al. Maternal and fetal genetic effects on birth weight and their relevance to cardio-metabolic risk factors. Nature Genetics, 01 May 2019, 51(5):804-814."
        ]
    },
    { 
        name: "Blood coagulation, factor V Leiden and 20210G-A", 
        definition: "Factor V Leiden and prothrombin 20210G-A are inherited thrombophilias that increase clotting risk. They predispose to deep vein thrombosis and pulmonary embolism. Risk is multifactorial; lifestyle modifications (exercise, avoiding prolonged sitting) and anticoagulation can help prevent complications.",
        variants: "13.5 million variants",
        loci: "91 loci",
        genes: "(1) F2F5",
        bibliography: [
            "Bertina RM, Koeleman BP, Koster T, Rosendaal FR, Dirven RJ, de Ronde H, van der Velden PA, Reitsma PH. Mutation in blood coagulation factor V associated with resistance to activated protein C. Nature. 1994;369(6475):64-7.",
            "Doherty TM, Kelley A. Bleeding Disorders. 2019 Jun 16. StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2020 Jan-.",
            "Kujovich JL. Factor V Leiden thrombophilia. Genet Med. 2011;13(1):1-16.",
            "Simone B, De Stefano V, Leoncini E, Zacho J, Martinelli I, Emmerich J, et al. Risk of venous thromboembolism associated with single and combined effects of Factor V Leiden, Prothrombin 20210A and Methylenetethraydrofolate reductase C677T: a meta-analysis involving over 11,000 cases and 21,000 controls. Eur J Epidemiol. 2013;28(8):621-47.",
            "Stevens SM, Woller SC, Bauer KA, Kasthuri R, Cushman M, Streiff M, et al. Guidance for the evaluation and treatment of hereditary and acquired thrombophilia. J Thromb Thrombolysis. 2016;41(1):154-64."
        ]
    },
    { 
        name: "Blood Group ABO/Rh", 
        definition: "The blood group of each individual is determined by the surface proteins expressed on the membrane of the red blood cells. Of the multitude of systems described, the most relevant, especially for human-to-human compatibility, are the ABO and Rh systems. Blood group is defined by the proteins or antigens expressed on the surface of erythrocytes or red blood cells. There are several known classificatory systems, but the most relevant for the categorization of the blood group in the population are the ABO system and the Rh system. In the case of the ABO system the antigens anchored to the surface of red blood cells are sugars that are produced by a series of reactions in which enzymes catalyze the transfer of sugar units. A person's DNA determines the type of enzymes he has and, therefore, the type of sugar antigens that end up on their red blood cells. An individual can express on the surface of the erythrocyte antigen A, B, both or neither, giving rise to the 4 possible blood groups of this system, A, B, AB or O respectively. The A allele encodes a glycosyltransferase that produces the antigen with the sugar N-acetylgalactosamine, the B allele to generate the sugar D-galactose, and the O allele for an enzyme with no function hence no sugar is expressed on the surface of the erythrocyte. Blood group O is the most common blood group worldwide, followed by blood group A. Group B is less common, and group AB is the least common. In contrast, Rh blood group antigens are proteins. A person's DNA contains the information to produce the protein antigens. The RhD gene codes for the D antigen, which is a large membrane protein. Some people have a version of the gene that does not express the D antigen on the cell surface and, therefore, the RhD protein is absent on their red blood cells. Hence, the two existing blood group types for the Rh system, Rh+ and Rh- respectively.",
        variants: "13.5 million variants",
        loci: "Multiple loci including ABO and RHD genes",
        genes: "(1) ABORHD",
        bibliography: [
            "Dean L. Blood Groups and Red Cell Antigens. National Center for Biotechnology Information [May 2022].",
            "ABO blood group system. Encyclopedia Britannica, [May 2022]",
            "National Health Services. Blood Groups [May 2022]"
        ]
    },
    { 
        name: "C-reactive protein levels",
        definition: "C-reactive protein is a protein commonly used to determine the degree of effectiveness of a treatment as it is linked to the immune system and participates in the defense system against infections. C-reactive protein (CRP) is a protein synthesized by the liver, the level of which increases in response to inflammation. CRP is an acute phase reactant protein that is mainly induced by the action of interleukin 6 on the gene responsible for CRP transcription during the acute phase of an inflammatory process. Although CRP is mainly synthesized in hepatic hepatocytes as mentioned above, it can also be synthesized in smooth muscle cells, macrophages, endothelial cells, lymphocytes and adipocytes. The name CRP arose because it was first identified as a substance in the serum of acutely inflamed patients that reacted with the antibody to the \"C\" carbohydrate of the pneumococcal capsule. CRP has both proinflammatory and anti-inflammatory properties. It plays a role in the recognition and elimination of foreign pathogens and damaged cells by binding to phosphocholine, phospholipids, histone, chromatin and fibronectin, enhancing macrophage phagocytosis and participating in innate immunity as a first defense system against infections. There are many factors that can alter initial CRP levels, such as age, sex, smoking, weight, lipid levels and blood pressure. CRP levels increase and decrease rapidly with the onset and removal of the inflammatory stimulus, respectively. Normal C-reactive protein levels increase within 6 hours and peak within 48 hours. Persistently elevated CRP levels may be seen in chronic inflammatory conditions, such as chronic infections or inflammatory arthritis, such as rheumatoid arthritis. Measuring and quantifying the level of C-Reactive Protein can be useful in determining the effectiveness of a treatment or knowing how advanced a disease or infection is.",
        variants: "13.5 million variants",
        loci: "91 loci",
        genes: "(94) ABO, ACKR1, ADAP1, ANK3, APOC1, etc.",
        bibliography: [
            "Sinnott-Armstrong N., Tanigawa Y., et al. Genetics of 35 blood and urine biomarkers in the UK Biobank. Nature Genetics, 18 Jan 2021, 53(2):185-194",
            "Nehring S.M., Goyal A., et al. C Reactive Protein. StatPearls",
            "Sproston N.R. et Ashworth J.J. Role of C-Reactive Protein at Sites of Inflammation and Infection. Front Immunol. 2018; 9: 754."
        ]
    },
    { 
        name: "Cathepsin D levels", 
        definition: "Cathepsin D is a lysosomal protease crucial for the degradation of both intracellular and extracellular proteins. This enzyme is essential for protein turnover, apoptosis and various cell signaling processes. Cathepsins are the major mammalian lysosomal proteases and are involved in tissue and bone remodeling, antigen processing and presentation, protein, hormone and neuropeptide processing, wound healing, apoptosis, and in the development and progression of diseases such as cancer, inflammation, atherosclerosis, rheumatoid arthritis, rheumatoid arthritis and other diseases.They are involved in tissue and bone remodeling, antigen processing and presentation, protein, hormone and neuropeptide processing, wound healing, apoptosis, and in the development and progression of diseases such as cancer, inflammation, atherosclerosis, rheumatoid arthritis and neurodegeneration. Cathepsin D is a most abundant lysosomal protease belonging to the aspartic family. It is predominantly found in the lysosomes of cells and plays a crucial role in the degradation of intracellular and extracellular proteins. It is synthesized in the rough endoplasmic reticulum as preprocatepsin D. It is then transformed into procathepsin D and targeted to intracellular vesicular structures such as lysosomes, endosomes and phagosomes. This enzyme is active at acidic pH, characteristic of the lysosomal environment, and is essential for cellular protein turnover, apoptosis, and various cell signaling processes. Normally, procathepsin D is found intracellularly, but under certain conditions it can be secreted, as has been found in milk, serum, sweat and urine in humans and other animals. It can be secreted by various cell types, including macrophages, keratinocytes, mammary epithelial cells and cancer cells. Cathepsin D levels are influenced by several factors. Genetically, polymorphisms and mutations in the CTSD gene can alter its expression and activity, affecting neurodegenerative diseases and cancer. Also, physiological and pathological states, such as neurodegenerative diseases and several types of cancer, show altered cathepsin D levels. Environmental factors such as diet, physical exercise and stress also play a role in the regulation of this enzyme. For example, a diet rich in antioxidants can protect against lysosomal damage and maintain adequate cathepsin D levels. Over the past three decades, cathepsin D has been studied mainly for its role in cancer development and as a possible independent tumor marker. This research has elucidated its physiological role and uncovered new functions, underscoring the importance of combining this knowledge to better understand the therapeutic and diagnostic potential of cathepsin D in human oncology.",
        variants: "13.5 million variants",
        loci: "12 loci",
        genes: "(7) CTSD, FGF21, GCKR, GNPTAB, IFITM10, KRTAP5-6, MAU2",
        bibliography: [
            "Folkersen L., Gustafsson S., et al. Genomic and drug target evaluation of 90 cardiovascular proteins in 30,931 individuals. Nature Metabolism, 16 Oct 2020, 2(10):1135-1148.",
            "Benes P., Vetvicka V., et al. CATHEPSIN D - MANY FUNCTIONS OF ONE ASPARTIC PROTEASE. Crit Rev Oncol Hematol. 2008 Oct; 68(1): 12-28.",
            "Mijanovik O., Petushkova A., et al. Cathepsin D-Managing the Delicate Balance. Pharmaceutics 2021, 13(6), 837."
        ]
    },
    { 
        name: "CCR5Delta32 and susceptibility to HIV infection", 
        definition: "CCR5 acts as an important co-receptor used by HIV for cellular entry into TCD4+ lymphocytes. The presence of a natural 32 base pair deletion in the CCR5 gene, known as CCR5Delta32, produces a truncated receptor that is not expressed on the surface of lymphocytes, thus preventing viral access and conferring resistance to infection. The HIV virus continues to be one of the major global public health problems involving 1.5 million newly diagnosed individuals in 2020, and a mortality of 680000 during the same year, despite improvements in transmission measures and knowledge of HIV biology. HIV invades and destroys TCD4+ (also called Th) lymphocytes and to a lesser extent other cells of the immune system. Over time the infection progresses to immune system failure, allowing opportunistic infections and life-threatening cancers to develop, in the form of the disease known as Acquired Immune Deficiency Syndrome (AIDS). To invade Th lymphocytes, HIV-1 (the most frequent) can employ the co-receptors CCR5, CXCR4, or both. However, the amount of CCR5 on the surface of CD4+ T cells is a key regulator of cellular unafectability, and a critical determinant of disease progression. CCR5 is a receptor for chemokines, molecules responsible for the attraction of other cell types to certain parts of the body, mainly involved in immune surveillance and inflammatory response. The expression of the CCR5 co-receptor on the cell surface can be prevented by a natural genetic variant consisting of a 32 base pair deletion. This variant generates a non-functional entry co-receptor for HIV that does not favor fusion between the virus and the target cell membrane, thus preventing infection and pathogenesis. Carriers of two copies (1% of Europeans) are highly protected from infection, although it is not complete, as rare cases of infection have been reported in these individuals. In the case of presenting a single copy of this variant, it seems to be associated with a reduced viral load, a slower rate of lymphocyte loss and thus a delayed progression to AIDS. In addition, they would show a better virological response to antiretroviral therapy. CCR5Delta32 is mainly observed in European populations (10%), especially in the north, such as Finland and Russia (16%), Iceland (15%), Sweden (14%), Denmark (13%), northern France (14%) or Norway (10%), while it has a lower incidence in the south and the Mediterranean, such as Spain (7%), Italy (5% 6%), Portugal (5.2%) or Sardinia (4%). It has also been observed in other populations of European descent related to migratory movements in South Africa (13%) or Chile (12%), as well as in African Americans, although with a low incidence (2%) and in some Jewish populations, especially Ashkenazi (11-20%). It is practically absent in sub-Saharan Africans, Asians and Native Americans.",
        variants: "13.5 million variants",
        loci: "176 loci",
        genes: "(1) CCR5",
        bibliography: [
            "Jasinska AJ et al CCR5 as a Coreceptor for Human Immunodeficiency Virus and Simian Immunodeficiency Viruses: A Prototypic Love-Hate Affair. Front Immunol. 2022;13:835994.",
            "Ellwanger JH et al. Beyond HIV infection: Neglected and varied impacts of CCR5 and CCR5Delta32 on viral diseases. Virus Res. 2020;286:198040.",
            "Scheller SH et al. Biallelic, Selectable, Knock-in Targeting of CCR5 via CRISPR-Cas9 Mediated Homology Directed Repair Inhibits HIV-1 Replication. Front Immunol. 2022;13:821190.",
            "Matti C et al. CCR5 deficiency/CCR5?32: resistant to HIV infection at the cost of curtailed CD4 + T cell memory responses. EMBO J. 2020 Aug 3;39(15):e105854."
        ]
    },
    { 
        name: "Cognitive ability", 
        definition: "The study of genetic variants can help us understand the causes of differences in the cognitive functions of individuals that are determined by the environment but also have an important contribution from genetics. Educational attainment appears to be genetically influenced and was the main subject of the first GWAS (genome-wide association study) applied to the social sciences that looked for which genes might be related to such cognitive ability. Cognitive ability is fundamental to physical and mental well-being. Better cognitive function during youth is associated with a lower risk of psychiatric disorders and disease later in life. Conversely, there is evidence that some diseases can affect cognitive abilities in young people, thereby affecting their studies.",
        variants: "13.5 million variants",
        loci: "176 loci",
        genes: "(186) ABT1, ADAMTSL3, AFF3, ANAPC4, ARHGAP15, etc.",
        bibliography: [
            "Lee J.J., Wedow R., et al. Gene discovery and polygenic prediction from a genome-wide association study of educational attainment in 1.1 million individuals. Nature Genetics, 23 Jul 2018, 50(8):1112-1121."
        ]
    },
    { 
        name: "Corneal curvature", 
        definition: "The cornea is fundamental for vision, since its curvature directly influences light refraction and, therefore, visual quality. Alterations in this curvature can result in refractive errors such as myopia and hyperopia. Refractive errors are widespread in the world and one of the most affected populations is the Asian population. Corneal curvature refers to the shape and curvature of the cornea, the transparent, convex layer that covers the front of the eye and plays a crucial role in the refraction of light. It is a key aspect of the eye's vision, as the surface of the cornea provides approximately two-thirds of the eye's optical power. Changes in the curvature of the cornea can significantly affect refractive error, as occurs in myopia, where a steeper curvature is associated with a more negative or myopic refractive error. In an emmetropic eye (without vision problems), the refractive power of the optical components of the eye, including the curvature of the cornea, must be properly aligned with the axial length of the eye to avoid refractive errors such as myopia or hyperopia. Problems in the refractive ability of the eye are a common error worldwide, particularly in Asia, where uncorrected refractive error is a major cause of visual impairment and blindness. Measurement of corneal curvature can be performed by different specialized methods, although corneal topography is one of the most commonly used. This technique uses Placido rings or laser scanning systems to generate a detailed three-dimensional map of the corneal surface. The average curves of an emmetropic eye are between 42 and 45D.",
        variants: "13.5 million variants",
        loci: "39 loci",
        genes: "(37) ADAMTS20, ADAMTS3, ADAMTS7, BMP7, CHRND, etc.",
        bibliography: [
            "Fan Q, Pozarickij A, Tan NYQ, et al. Genome-wide association meta-analysis of corneal curvature identifies novel loci and shared genetic influences across axial length and refractive error. Commun Biol. 2020 Mar 19;3(1):133.",
            "Guggenheim JA, McMahon G, Kemp JP, et al. A genome-wide association study for corneal curvature identifies the platelet-derived growth factor receptor α gene as a quantitative trait locus for eye size in white Europeans. Mol Vis. 2013;19:243-53. Epub 2013 Jan 3."
        ]
    },
    { 
        name: "Corneal hysteresis", 
        definition: "Corneal hysteresis is a measure that assesses the ability of the cornea to absorb and release energy, reflecting its elasticity and viscosity. It is determined by observing how the cornea deforms under pressure and how it returns to its original shape. This parameter is crucial in the evaluation of ocular health, particularly in relation to glaucoma and its progression. Corneal hysteresis measures the ability of the cornea to absorb and dissipate energy, and varies among individuals. In healthy eyes, the average of this measurement is around 10.7 mmHg. With age, the cornea becomes stiffer and less flexible, which decreases corneal hysteresis. This change is due to changes in the structure of the corneal stroma, composed mainly of collagen. Corneal hysteresis is measured with a device that uses a blast of air to deform the cornea and then measures its recovery. This parameter provides valuable information for assessing the risk of glaucoma progression, since patients with glaucoma tend to have a lower corneal hysteresis. Corneal hysteresis has been related to progressive visual field loss, the presence and severity of glaucoma, as well as conversion to glaucoma. Although factors such as age and intraocular pressure may influence these measurements, corneal hysteresis remains a valuable tool for identifying those at increased risk of disease progression.",
        variants: "13.5 million variants",
        loci: "9 loci",
        genes: "(9) ABCA6, ADAMTS8, ANAPC1, FOXO1, MOCS2, MPDZ, TBX2, TCF4, ZNF469",
        bibliography: [
            "Murtagh P, O'Brien C. Corneal Hysteresis, Intraocular Pressure, and Progression of Glaucoma: Time for a \"Hyst-Oric\" Change in Clinical Practice? J Clin Med. 2022 May 20;11(10):2895.",
            "Simcoe MJ, Khawaja AP, Hysi PG, et al. Genome-wide association study of corneal biomechanical properties identifies over 200 loci providing insight into the genetic etiology of ocular diseases. Hum Mol Genet. 2020 Nov 4;29(18):3154-3164.",
            "Sit AJ, Chen TC, Takusagawa HL, et al. Corneal Hysteresis for the Diagnosis of Glaucoma and Assessment of Progression Risk: A Report by the American Academy of Ophthalmology. Ophthalmology. 2023 Apr;130(4):433-442."
        ]
    },
    { 
        name: "Dental caries and periodontitis", 
        definition: "Tooth decay and periodontitis are two common but distinct oral health problems that affect the teeth and gums. Both can have serious consequences if not treated properly. Dental caries is one of the most prevalent diseases worldwide. It is an oral disease that affects the teeth. It occurs when acids produced by bacteria in the mouth corrode the tooth enamel, the protective outer layer of the teeth. This change in the microbiota of the tooth causes an imbalance in the demineralization and remineralization of the tooth. Symptoms of caries can include tooth sensitivity, pain when chewing, visible discoloration of the teeth and the formation of holes in the teeth. Prevention of tooth decay involves good oral hygiene, including regular brushing and flossing, as well as a balanced diet low in sugar. It is also important to visit the dentist regularly for checkups and cleanings. Periodontal diseases, on the other hand, are a group of diseases, also of bacterial cause, in which, due to the state of dysbiosis under the gums leads to inflammation. It affects, in addition to the gums, the supporting structures of the teeth, such as the alveolar bone. Periodontitis usually begins with the accumulation of plaque and tartar in the gums. Over time, the bacteria provoke an inflammatory response from the body that damages the gums and the bone supporting the teeth. Symptoms of periodontitis can include red, swollen and bleeding gums, persistent bad breath, gum recession, tooth sensitivity and, in advanced stages, tooth mobility. Prevention of periodontitis also relies on good oral hygiene, including brushing, flossing and mouthwash. Regular dental visits are essential for early detection and treatment of gum disease. The development of caries and periodontitis involves, in addition to those mentioned above, a number of factors, some of which are shared by both conditions. Among them we can find smoking, oral bacteria, diet, oral hygiene, fluoride deficiency in teeth, lack of saliva, use of medications and genetics.",
        variants: "13.5 million variants",
        loci: "32 loci",
        genes: "(35) ALKAL2, AMY1, CBAHCC1, BTN3A2, CA12, etc.",
        bibliography: [
            "Shungin D, Haworth S, et al. Genome-wide analysis of dental caries and periodontitis combining clinical and self-reported data. Nature Communications, 24 Jun 2019, 10(1):2773.",
            "Robert D., Arezou R., et al. Dental caries are positively associated with periodontal disease severity. Clin Oral Investig. 2019 Oct;23(10):3811-3819. doi: 10.1007/s00784-019-02810-6. Epub 2019 Jan 28.",
            "Martínez M, Montero E, et al. Association between caries and periodontal diseases in a sample of employed adults in Spain: a cross-sectional study. Clinical Oral Investigations volume 25, pages3957-3966 (2021)."
        ]
    },
    { 
        name: "Duffy Antigen, malaria resistant", 
        definition: "The Duffy antigen consists of a glycoprotein on the surface of erythrocytes that acts as a key mediator for the access of the Plasmodium vivax parasite to the interior of red blood cells during its life cycle. Thus, individuals who do not carry this antigen would be resistant to the forms of malaria caused by this species. Malaria is an acute febrile illness caused by parasites of the Plasmodium genus, which are transmitted to humans through the bite of infected females of the Anopheles mosquito genus. The incidence has been established at around 60 cases per 1000 at-risk individuals annually, with a high mortality rate, especially among children, especially in resource-poor countries where the incidence is particularly high. There are five species of parasites that cause malaria in humans, of which the most dangerous are Plasmodium falciparum and vivax. Since the vector of transmission is a mosquito, it is usually restricted to tropical and subtropical areas where these insects thrive, however, while P falciparum is the most deadly malaria parasite and the most prevalent on the African continent.However, while P falciparum is the most deadly and most prevalent malaria parasite on the African continent, P vivax is the most widespread species outside Africa, accounting for 64% of cases in the Americas, more than 30% in Southeast Asia and 40% in the Eastern Mediterranean. At a particular stage of the parasite's life cycle, the parasite must be able to gain access to the interior of erythrocytes. The Duffy antigen receptor for chemokines (DARC), also known as Duffy antigen, is a glycosylated erythrocyte cell surface protein that acts as a receptor for various chemokines (molecules responsible for chemically attracting various cell types). Its exact function is unknown, but it seems to be involved in the regulation of chemokine bioavailability and, consequently, the recruitment of leukocytes in different tissues. However, it has been reported that the Duffy antigen plays an important role in malaria transmission by acting as an erythroid receptor for P vivax. Thus, its absence (typical of African ancestry for which the most relevant parasite species is P falciparum), makes erythrocytes resistant to invasion by the P vivax species of the parasite. However, it is important to consider that there are other parasite species that can trigger malaria so that people who do not have the Duffy antigen can still be infected by these other forms of malaria. In addition, it has been suggested that DARC binding to platelet factor 4 (PF4) is essential for platelet-mediated clearance of P falciparum parasites, so in cases of infection by this other species, its absence may trigger a negative effect, however, these associations are still under investigation.",
        variants: "13.5 million variants",
        loci: "763 loci",
        genes: "(1) DARC",
        bibliography: [
            "World Health Organizatio (WHO) Paludism. [May 2022]",
            "Aldarweesh F. The Duffy Blood Group System. Human Blood Group Systems and Haemoglobinopathies. London: IntechOpen; 2019 [May 2022].",
            "Kaur H et al. Duffy antigen receptor for chemokines (DARC) and susceptibility to Plasmodium vivax malaria. Parasitol Int. 2019 Aug;71:73-75.",
            "Kano FS et al. Susceptibility to Plasmodium vivax malaria associated with DARC (Duffy antigen) polymorphisms is influenced by the time of exposure to malaria. Sci Rep. 2018 Sep 14;8(1):13851.",
            "Reich D et al. Reduced Neutrophil Count in People of African Descent Is Due To a Regulatory Variant in the Duffy Antigen Receptor for Chemokines Gene. PLoS Genet. 2009 Jan; 5(1): e1000360."
        ]
    },
    { 
        name: "Ear lobe type", 
        definition: "The attachment pattern of ear lobes, which can be free-hanging or attached, influenced by genetic inheritance.",
        variants: "13.5 million variants",
        loci: "Multiple loci including EDAR and TCHH variants",
        genes: "EDAR (ectodysplasin A receptor), TCHH (trichohyalin), TCHHL1 (trichohyalin like 1)",
        bibliography: [
            "Adhikari K, Fontanil T, Cal S, et al. A genome-wide association scan in admixed Latin Americans identifies loci influencing facial and scalp hair features. Nat Commun. 2016 Jan 19;7:10815.",
            "Liu F, van der Lijn F, Schurmann C, et al. A genome-wide association study identifies five loci influencing facial morphology in Europeans. PLoS Genet. 2012;8(9):e1002932.",
            "Paternoster L, Zhurov AI, Toma AM, et al. Genome-wide association study of three-dimensional facial morphology identifies a variant in PAX3 associated with nasion position. Am J Hum Genet. 2012 Mar 9;90(3):478-85."
        ]
    },
    { 
        name: "Earwax type / Armpit odor", 
        definition: "Genetic variations that determine earwax consistency and body odor characteristics.",
        variants: "13.5 million variants",
        loci: "Multiple loci including ABCC11 and ABCC12 variants",
        genes: "ABCC11 (ATP binding cassette subfamily C member 11), ABCC12 (ATP binding cassette subfamily C member 12)",
        bibliography: [
            "Yoshiura K, Kinoshita A, Ishida T, et al. A SNP in the ABCC11 gene is the determinant of human earwax type. Nat Genet. 2006 Mar;38(3):324-30.",
            "Toyoda Y, Sakurai A, Mitani Y, et al. Earwax, osmidrosis, and breast cancer: why does one SNP (538G>A) in the human ABC transporter ABCC11 gene determine earwax type? FASEB J. 2009 Jun;23(6):2001-13.",
            "Nakano M, Miwa N, Hirano A, et al. A strong association of axillary osmidrosis with the wet earwax type determined by genotyping of the ABCC11 gene. BMC Genet. 2009 Aug 18;10:42."
        ]
    },
    { 
        name: "Eosinophil count", 
        definition: "The number of eosinophils in the blood, white blood cells involved in allergic responses and parasite defense.",
        variants: "13.5 million variants",

        genes: "IL5 , IL5RA , CCL11 , CCL24",
        bibliography: [
            "Astle WJ, Elding H, Jiang T, et al. The allelic landscape of human blood and white blood cell phenotypes. Science. 2016 Dec 23;354(6319):aaf8969.",
            "Vuckovic D, Bao EL, Akbari P, et al. The polygenic and monogenic basis of blood traits and diseases. Cell. 2020 Sep 17;182(6):1214-1231.e11.",
            "Chen MH, Raffield LM, Mousas A, et al. Trans-ethnic and ancestry-specific blood-cell genetics in 746,667 individuals from 5 global populations. Cell. 2020 Sep 17;182(6):1198-1213.e14."
        ]
    },
    { 
        name: "Epigenetic aging", 
        definition: "The rate at which biological aging occurs at the molecular level, influenced by genetic and environmental factors.",
        variants: "13.5 million variants",
        loci: "25 loci",
        genes: "(24) AKIRIN1, C1orf112, CD34, CSPG5, CYRIA, etc.",
        bibliography: [
            "Lu AT, Quach A, Wilson JG, et al. DNA methylation GrimAge strongly predicts lifespan and healthspan. Aging (Albany NY). 2019 Jan 21;11(2):303-327.",
            "Hannum G, Guinney J, Zhao L, et al. Genome-wide methylation profiles reveal quantitative views of human aging rates. Mol Cell. 2013 Jan 24;49(2):359-67.",
            "Horvath S. DNA methylation age of human tissues and cell types. Genome Biol. 2013;14(10):R115."
        ]
    },
    { 
        name: "Estradiol levels", 
        definition: "The primary form of estrogen in the body, with levels that vary based on genetic factors and life stage.",
        variants: "13.5 million variants",
        loci: "13 loci",
        genes: "(11) ABO, CABLES1, CYP19A1, CYP3A7, FKBP4, etc.",
        bibliography: [
            "Ruth KS, Day FR, Tyrrell J, et al. Using human genetics to understand the disease impacts of testosterone in both men and women. Nat Med. 2020 Feb;26(2):252-258.",
            "Perry JR, Day F, Elks CE, et al. Parent-of-origin-specific allelic associations among 106 genomic loci for age at menarche. Nature. 2014 Oct 2;514(7520):92-7.",
            "Day FR, Thompson DJ, Helgason H, et al. Large-scale genomic analyses link reproductive aging to hypothalamic signaling, breast cancer susceptibility and BRCA1-mediated DNA repair. Nat Genet. 2015 Nov;47(11):1294-303."
        ]
    },
    { 
        name: "Eye clarity", 
        definition: "The transparency and optical quality of the eye, which can be influenced by genetic factors affecting eye development.",
        variants: "13.5 million variants",
        loci: "52 loci",
        genes: "(49) ADRB2, AHRR, AP3M2, BTG1, CCDC13, etc.",
        bibliography: [
            "Fan Q, Pozarickij A, Tan NYQ, et al. Genome-wide association meta-analysis of corneal curvature identifies novel loci and shared genetic influences across axial length and refractive error. Commun Biol. 2020 Mar 19;3(1):133.",
            "Guggenheim JA, McMahon G, Kemp JP, et al. A genome-wide association study for corneal curvature identifies the platelet-derived growth factor receptor α gene as a quantitative trait locus for eye size in white Europeans. Mol Vis. 2013;19:243-53. Epub 2013 Jan 3.",
            "Simcoe MJ, Khawaja AP, Hysi PG, et al. Genome-wide association study of corneal biomechanical properties identifies over 200 loci providing insight into the genetic etiology of ocular diseases. Hum Mol Genet. 2020 Nov 4;29(18):3154-3164."
        ]
    },
    { 
        name: "Facial aging", 
        definition: "The rate and pattern of facial aging, including wrinkle formation and skin changes, influenced by genetic factors.",
        variants: "13.5 million variants",
        loci: "55 loci",
        genes: "(54) AKAP1, AKAP12, ARAP2, ARL15, AXIN2,etc.",
        bibliography: [
            "Liu F, van der Lijn F, Schurmann C, et al. A genome-wide association study identifies five loci influencing facial morphology in Europeans. PLoS Genet. 2012;8(9):e1002932.",
            "Paternoster L, Zhurov AI, Toma AM, et al. Genome-wide association study of three-dimensional facial morphology identifies a variant in PAX3 associated with nasion position. Am J Hum Genet. 2012 Mar 9;90(3):478-85.",
            "Adhikari K, Fontanil T, Cal S, et al. A genome-wide association scan in admixed Latin Americans identifies loci influencing facial and scalp hair features. Nat Commun. 2016 Jan 19;7:10815."
        ]
    },
    { 
        name: "Frequency of bowel movements", 
        definition: "The regularity and frequency of bowel movements, which can be influenced by genetic factors affecting digestive function.",
        variants: "13.5 million variants",
        loci: "14 loci",
        genes: "(14) BDNF, CALCB, CDK18, DMC1, KIF4B, etc.",
        bibliography: [
            "Bonfiglio F, Zheng T, Garcia-Etxebarria K, et al. Female-specific association between variants on chromosome 9 and self-reported diagnosis of irritable bowel syndrome. Gastroenterology. 2018 Sep;155(3):168-179.",
            "Eijsbouts C, Zheng T, Kennedy NA, et al. Genome-wide analysis of 53,400 people with irritable bowel syndrome highlights shared genetic pathways with mood and anxiety disorders. Nat Genet. 2021 Nov;53(11):1543-1552.",
            "Zheng T, Ellinghaus D, Juzenas S, et al. Genome-wide analysis of 944 133 individuals provides insights into the etiology of haematuria. Nat Commun. 2021 Mar 2;12(1):1520."
        ]
    },
    { 
        name: "Gamma glutamyl transferase levels", 
        definition: "A liver enzyme involved in amino acid transport and glutathione metabolism, used as a marker for liver function.",
        variants: "13.5 million variants",
        loci: "556 loci",
        genes: "(525) A1CF, A3GALT2, ABCA9, ABCB11, ABCC2, etc.",
        bibliography: [
            "Barton AR, Sherman MA, et al. Whole-exome imputation within UK Biobank powers rare coding variant association and fine-mapping analyses. Nat Genet. 2021 Aug;53(8):1260-1269.",
            "Shi F, Zhao M, Zheng S, et al. Advances in genetic variation in metabolism-related fatty liver disease. Front Genet. 2023 Sep 11;14:1213916.",
            "Sookoian S, Pirola CJ. Liver enzymes, metabolomics and genome-wide association studies: from systems biology to the personalized medicine. World J Gastroenterol. 2015 Jan 21;21(3):711-25."
        ]
    },
    { 
        name: "Gene COMT", 
        definition: "The catechol-O-methyltransferase gene, involved in breaking down catecholamines and affecting various neurological functions.",
        variants: "13.5 million variants",
        loci: "121 loci",
        genes: "(124) AKAP1, AKAP12, ANXA3, AP3M2, AREG,etc.",
        bibliography: [
            "Chen J, Lipska BK, Halim N, et al. Functional analysis of genetic variation in catechol-O-methyltransferase (COMT): effects on mRNA, protein, and enzyme activity in postmortem human brain. Am J Hum Genet. 2004 Nov;75(5):807-21.",
            "Tunbridge EM, Harrison PJ, Weinberger DR. Catechol-O-methyltransferase, cognition, and psychosis: Val158Met and beyond. Biol Psychiatry. 2006 Jul 15;60(2):141-51.",
            "Witte AV, Flöel A. Effects of COMT polymorphisms on brain function and behavior in health and disease. Brain Res Bull. 2012 Mar 10;88(5):418-28."
        ]
    },
    { 
        name: "Gene MTHFR", 
        definition: "The methylenetetrahydrofolate reductase gene, involved in folate metabolism and affecting various biological processes.",
        variants: "13.5 million variants",
        loci: "Multiple loci including MTHFR and related folate pathway variants",
        genes: "MTHFR",
        bibliography: [
            "Frosst P, Blom HJ, Milos R, et al. A candidate genetic risk factor for vascular disease: a common mutation in methylenetetrahydrofolate reductase. Nat Genet. 1995 Oct;10(2):111-3.",
            "van der Put NM, Gabreëls F, Stevens EM, et al. A second common mutation in the methylenetetrahydrofolate reductase gene: an additional risk factor for neural-tube defects? Am J Hum Genet. 1998 May;62(5):1044-51.",
            "Rozen R. Genetic predisposition to hyperhomocysteinemia: deficiency of methylenetetrahydrofolate reductase (MTHFR). Thromb Haemost. 1997 Jul;78(1):523-6."
        ]
    },
    { 
        name: "Gene MTR", 
        definition: "The methionine synthase gene, involved in methionine metabolism and affecting various biological processes.",
        variants: "13.5 million variants",
      
        genes: "MTR",
        bibliography: [
            "Leclerc D, Wilson A, Dumas R, et al. Cloning and mapping of a cDNA for methionine synthase reductase, a flavoprotein defective in patients with homocystinuria. Proc Natl Acad Sci U S A. 1998 Mar 17;95(6):3059-64.",
            "Wilson A, Leclerc D, Rosenblatt DS, et al. Molecular basis for methionine synthase reductase deficiency in patients belonging to the cblE complementation group of disorders in folate/cobalamin metabolism. Hum Mol Genet. 1999 Dec;8(13):2009-16.",
            "Watkins D, Rosenblatt DS. Inborn errors of cobalamin absorption and metabolism. Am J Med Genet C Semin Med Genet. 2011;157C(1):33-44."
        ]
    },
    { 
        name: "Gene MTRR", 
        definition: "The methionine synthase reductase gene, involved in methionine metabolism and affecting various biological processes.",
        variants: "13.5 million variants",

        genes: "MTRR",
        bibliography: [
            "Wilson A, Leclerc D, Rosenblatt DS, et al. Molecular basis for methionine synthase reductase deficiency in patients belonging to the cblE complementation group of disorders in folate/cobalamin metabolism. Hum Mol Genet. 1999 Dec;8(13):2009-16.",
            "Leclerc D, Wilson A, Rosenblatt DS, et al. Molecular analysis of methionine synthase reductase deficiency in patients belonging to the cblE complementation group of disorders in folate/cobalamin metabolism. Hum Mol Genet. 1999 Dec;8(13):2009-16.",
            "Watkins D, Rosenblatt DS. Inborn errors of cobalamin absorption and metabolism. Am J Med Genet C Semin Med Genet. 2011;157C(1):33-44."
        ]
    },
    { 
        name: "Hair color", 
        definition: "The natural color of hair, determined by genetic factors affecting melanin production and distribution.",
        variants: "13.5 million variants",
        loci: "MC1R, OCA2, TYR, SLC45A2, and IRF4",
        genes: "MC1R, OCA2, TYR (tyrosinase), SLC45A2 , IRF4 ",
        bibliography: [
            "Hysi PG, Valdes AM, Liu F, et al. Genome-wide association meta-analysis of individuals of European ancestry identifies new loci explaining a substantial fraction of hair color variation and heritability. Nat Genet. 2018 Jun;50(6):652-656.",
            "Liu F, Wollstein A, Hysi PG, et al. Digital quantification of human eye color highlights genetic association of three new loci. PLoS Genet. 2010 May 20;6(5):e1000934.",
            "Eriksson N, Macpherson JM, Tung JY, et al. Web-based, participant-driven studies yield novel genetic associations for common traits. PLoS Genet. 2010 Jun 24;6(6):e1000993."
        ]
    },
    { 
        name: "Hair texture", 
        definition: "The natural texture and structure of hair, including straight, wavy, or curly patterns, influenced by genetic factors.",
        variants: "13.5 million variants",
        loci: "Multiple loci including liver function and metabolism variants",
        genes: "COMT , MAOA , MAOB , TH ",
        bibliography: [
            "Medland SE, Nyholt DR, Painter JN, et al. Common variants in the trichohyalin gene are associated with straight hair in Europeans. Am J Hum Genet. 2009 Nov;85(5):750-5.",
            "Fujimoto A, Kimura R, Ohashi J, et al. A scan for genetic determinants of human hair morphology: EDAR is associated with Asian hair thickness. Hum Mol Genet. 2008 Mar 1;17(5):835-43.",
            "Adhikari K, Fontanil T, Cal S, et al. A genome-wide association scan in admixed Latin Americans identifies loci influencing facial and scalp hair features. Nat Commun. 2016 Jan 19;7:10815."
        ]
    },
    { 
        name: "Heat production in response to cold", 
        definition: "The body's ability to generate heat in response to cold temperatures, influenced by genetic factors affecting metabolism.",
        variants: "13.5 million variants",
        loci: "1357 loci",
        genes: "(276) A3GALT2, AAMDC, ABCA9, ABCB4, ABCB5, etc.",
        bibliography: [
            "Vuckovic D, Bao EL, Akbari P, et al. The polygenic and monogenic basis of blood traits and diseases. Cell. 2020 Sep 17;182(6):1214-1231.e11.",
            "Astle WJ, Elding H, Jiang T, et al. The allelic landscape of human blood and white blood cell phenotypes. Science. 2016 Dec 23;354(6319):aaf8969.",
            "Chen MH, Raffield LM, Mousas A, et al. Trans-ethnic and ancestry-specific blood-cell genetics in 746,667 individuals from 5 global populations. Cell. 2020 Sep 17;182(6):1198-1213.e14."
        ]
    },
    { 
        name: "Height", 
        definition: "Adult height, which is strongly influenced by genetic factors affecting growth and development.",
        variants: "13.5 million variants",
        loci: "Multiple loci including HMGA2, GDF5, ADAMTSL3, and hundreds of other height-associated variants",
        genes: "HMGA2, GDF5, ADAMTSL3 ",
        bibliography: [
            "Wood AR, Esko T, Yang J, et al. Defining the role of common variation in the genomic and biological architecture of adult human height. Nat Genet. 2014 Nov;46(11):1173-86.",
            "Marouli E, Graff M, Medina-Gomez C, et al. Rare and low-frequency coding variants alter human adult height. Nature. 2017 Feb 9;542(7640):186-190.",
            "Lango Allen H, Estrada K, Lettre G, et al. Hundreds of variants clustered in genomic loci and biological pathways affect human height. Nature. 2010 Oct 14;467(7317):832-8."
        ]
    },
    { 
        name: "HLA-B27 antigen", 
        definition: "A human leukocyte antigen that can be associated with certain autoimmune conditions and inflammatory diseases.",
        variants: "13.5 million variants",
        loci: "242 loci",
        genes: "(215) ACVR2A, ADAMTS20, ADARB1, ADO, AMFR, etc.",
        bibliography: [
            "Taurog JD, Chhabra A, Colbert RA. Ankylosing spondylitis and axial spondyloarthritis. N Engl J Med. 2016 Jun 30;374(26):2563-74.",
            "Reveille JD. The genetic basis of spondyloarthritis. Ann Rheum Dis. 2011 Mar;70 Suppl 1:i44-50.",
            "Brown MA, Kenna T, Wordsworth BP. Genetics of ankylosing spondylitis--insights into pathogenesis. Nat Rev Rheumatol. 2016 Feb;12(2):81-91."
        ]
    },
    { 
        name: "Insomnia", 
        definition: "Difficulty falling asleep or staying asleep, which can be influenced by genetic factors affecting sleep regulation.",
        variants: "13.5 million variants",
        loci: "Multiple loci including circadian rhythm and sleep regulation variants",
        genes: "MTRR , MTR, CBS",
        bibliography: [
            "Lane JM, Vlasac IM, Anderson SG, et al. Genome-wide association analysis identifies novel loci for chronotype in 100,420 individuals from the UK Biobank. Nat Commun. 2016 Jan 29;7:10889.",
            "Jones SE, Lane JM, Wood AR, et al. Genome-wide association analyses of chronotype in 697,828 individuals provides insights into circadian rhythms. Nat Commun. 2019 Jan 29;10(1):343.",
            "Dashti HS, Jones SE, Wood AR, et al. Genome-wide association study identifies genetic loci for self-reported habitual sleep duration supported by accelerometer-derived estimates. Nat Commun. 2019 Mar 7;10(1):1100."
        ]
    },
    { 
        name: "Intensity of itching due to mosquito bites", 
        definition: "The severity of itching and skin reaction to mosquito bites, which can vary among individuals due to genetic factors.",
        variants: "13.5 million variants",
        loci: "30 loci",
        genes: "(32) ACTL9, BBS12, CSF2R, BETS1, FASLG, etc.",
        bibliography: [
            "Vander Does A, Labib A, Yosipovitch G. Update on mosquito bite reaction: Itch and hypersensitivity, pathophysiology, prevention, and treatment. Front Immunol. 2022 Sep 21;13:1024559.",
            "Peng Z, Simons FE. Mosquito allergy: immune mechanisms and recombinant salivary allergens. Int Arch Allergy Immunol. 2004 May;134(1):54-60.",
            "Peng Z, Yang M, Simons FE. Immunologic mechanisms in mosquito allergy: correlation of skin reactions with specific IgE and IgG antibodies and lymphocyte proliferation response to mosquito antigens. Ann Allergy Asthma Immunol. 1996 Sep;77(3):238-44."
        ]
    },
    { 
        name: "Left-handedness (left lateral)", 
        definition: "The preference for using the left hand for fine motor tasks, influenced by genetic factors affecting brain lateralization.",
        variants: "13.5 million variants",
        loci: "36 loci",
        genes: "(38) ABT1, ANKS1B, ATP1B1, ATXN2L, BCR, etc.",
        bibliography: [
            "Cuellar-Partida G, Tung JY, Eriksson N, et al. Genome-wide association study reveals 30 loci associated with human hair color variation. Nat Genet. 2018 Jun;50(6):652-656.",
            "Medland SE, Duffy DL, Wright MJ, et al. Genetic influences on handedness: data from 25,732 Australian and Dutch twin families. Neuropsychologia. 2009 Jan;47(2):330-7.",
            "Armour JA, Davison A, McManus IC. Genome-wide association study of handedness excludes simple genetic models. Heredity (Edinb). 2014 Mar;112(3):221-5."
        ]
    },
    { 
        name: "Liver iron levels", 
        definition: "The amount of iron stored in the liver, which can be influenced by genetic factors affecting iron metabolism.",
        variants: "13.5 million variants",
        loci: "10 loci",
        genes: "(10) ASNSD1, BTN1A1, BTN3A1, BTN3A2, H2BC4, etc.",
        bibliography: [
            "Barton AR, Sherman MA, et al. Whole-exome imputation within UK Biobank powers rare coding variant association and fine-mapping analyses. Nat Genet. 2021 Aug;53(8):1260-1269.",
            "Shi F, Zhao M, Zheng S, et al. Advances in genetic variation in metabolism-related fatty liver disease. Front Genet. 2023 Sep 11;14:1213916.",
            "Sookoian S, Pirola CJ. Liver enzymes, metabolomics and genome-wide association studies: from systems biology to the personalized medicine. World J Gastroenterol. 2015 Jan 21;21(3):711-25."
        ]
    },
    { 
        name: "Lymphocyte count", 
        definition: "The number of lymphocytes in the blood, white blood cells involved in immune responses.",
        variants: "13.5 million variants",
        loci: "811 loci",
        genes: "(1376) A2ML1, AANAT, ABCA2, ABCC1, ABCC5, etc.",
        bibliography: [
            "Vuckovic D, Bao EL, Akbari P, et al. The polygenic and monogenic basis of blood traits and diseases. Cell. 2020 Sep 17;182(6):1214-1231.e11.",
            "Astle WJ, Elding H, Jiang T, et al. The allelic landscape of human blood and white blood cell phenotypes. Science. 2016 Dec 23;354(6319):aaf8969.",
            "Chen MH, Raffield LM, Mousas A, et al. Trans-ethnic and ancestry-specific blood-cell genetics in 746,667 individuals from 5 global populations. Cell. 2020 Sep 17;182(6):1198-1213.e14."
        ]
    },
    { 
        name: "Male baldness", 
        definition: "Pattern hair loss in men, strongly influenced by genetic factors affecting hair follicle function.",
        variants: "13.5 million variants",
        loci: "358 loci",
        genes: "(414) ACTBL2, ACTL7B, ADAMTS18, ADAMTS9, AFF3, etc.",
        bibliography: [
            "Hagenaars SP, Hill WD, Harris SE, et al. Genetic prediction of male pattern baldness. PLoS Genet. 2017 Feb 14;13(2):e1006594.",
            "Yap CX, Sidorenko J, Wu Y, et al. Dissection of genetic variation and evidence for pleiotropy in male pattern baldness. Nat Commun. 2018 Dec 10;9(1):5407.",
            "Pirastu N, Joshi PK, de Vries PS, et al. GWAS for male-pattern baldness identifies 71 susceptibility loci explaining 38% of the risk. Nat Commun. 2017 Mar 8;8:1494."
        ]
    },
    { 
        name: "Mental agility", 
        definition: "The speed and flexibility of mental processing, influenced by genetic factors affecting cognitive function.",
        variants: "13.5 million variants",
        loci: "50 loci",
        genes: "(46) AFF3, AMIGO1, ANAPC4, ARHGAP15, ARNT, etc.",
        bibliography: [
            "Lee J.J., Wedow R., et al. Gene discovery and polygenic prediction from a genome-wide association study of educational attainment in 1.1 million individuals. Nature Genetics, 23 Jul 2018, 50(8):1112-1121.",
            "Savage JE, Jansen PR, Stringer S, et al. Genome-wide association meta-analysis in 269,867 individuals identifies new genetic and functional links to intelligence. Nat Genet. 2018 Jul;50(7):912-919.",
            "Hill WD, Davies G, Liewald DC, et al. Age-dependent pleiotropy between general cognitive function and major psychiatric disorders. Biol Psychiatry. 2016 Oct 1;80(7):266-73."
        ]
    },
    { 
        name: "Metabolizer profile CYP2C19", 
        definition: "Genetic variations in the CYP2C19 gene that affect how the body processes certain medications.",
        variants: "13.5 million variants",
        loci: "375 loci",
        genes: "(440) ABCE1, ABO, ACKR1, ACTRT2, ACVR2A, etc.",
        bibliography: [
            "Scott SA, Sangkuhl K, Stein CM, et al. Clinical Pharmacogenetics Implementation Consortium guidelines for CYP2C19 genotype and clopidogrel therapy: 2013 update. Clin Pharmacol Ther. 2013 Oct;94(4):317-23.",
            "Hicks JK, Bishop JR, Sangkuhl K, et al. Clinical Pharmacogenetics Implementation Consortium (CPIC) guideline for CYP2D6 and CYP2C19 genotypes and dosing of selective serotonin reuptake inhibitors. Clin Pharmacol Ther. 2015 Aug;98(2):127-34.",
            "Moriyama B, Obeng AO, Barbarino J, et al. Clinical Pharmacogenetics Implementation Consortium (CPIC) Guidelines for CYP2C19 and Voriconazole Therapy. Clin Pharmacol Ther. 2017 Jan;101(1):45-51."
        ]
    },
    { 
        name: "Metabolizer profile CYP2C9", 
        definition: "CYP2C9",
        variants: "13.5 million variants",

        genes: "CYP2C9",
        bibliography: [
            "Scott SA, Sangkuhl K, Gardner EE, et al. Clinical Pharmacogenetics Implementation Consortium guidelines for CYP2C9 and HLA-B genotypes and phenytoin dosing. Clin Pharmacol Ther. 2011 Nov;90(5):625-8.",
            "Johnson JA, Gong L, Whirl-Carrillo M, et al. Clinical Pharmacogenetics Implementation Consortium Guidelines for CYP2C9 and VKORC1 Genotypes and Warfarin Dosing. Clin Pharmacol Ther. 2011 Oct;90(4):625-9.",
            "Hicks JK, Bishop JR, Sangkuhl K, et al. Clinical Pharmacogenetics Implementation Consortium (CPIC) guideline for CYP2D6 and CYP2C19 genotypes and dosing of selective serotonin reuptake inhibitors. Clin Pharmacol Ther. 2015 Aug;98(2):127-34."
        ]
    },
    { 
        name: "Metabolizer profile CYP2D6", 
        definition: "Genetic variations in the CYP2D6 gene that affect how the body processes certain medications.",
        variants: "13.5 million variants",
       
        genes: "CYP2D6",
        bibliography: [
            "Hicks JK, Bishop JR, Sangkuhl K, et al. Clinical Pharmacogenetics Implementation Consortium (CPIC) guideline for CYP2D6 and CYP2C19 genotypes and dosing of selective serotonin reuptake inhibitors. Clin Pharmacol Ther. 2015 Aug;98(2):127-34.",
            "Crews KR, Gaedigk A, Dunnenberger HM, et al. Clinical Pharmacogenetics Implementation Consortium guidelines for codeine therapy in the context of cytochrome P450 2D6 (CYP2D6) genotype. Clin Pharmacol Ther. 2012 Apr;91(4):321-6.",
            "Gonsalves SG, Dirksen RT, Sangkuhl K, et al. Clinical Pharmacogenetics Implementation Consortium (CPIC) guideline for the use of potent volatile anesthetic agents and succinylcholine in the context of RYR1 or CACNA1S genotypes. Clin Pharmacol Ther. 2019 Jan;105(1):133-135."
        ]
    },
    { 
        name: "Metabolizer profile CYP3A5", 
        definition: "CYP3A5 ",
        variants: "13.5 million variants",
        genes: "CYP3A5",
        bibliography: [
            "Birdwell KA, Decker B, Barbarino JM, et al. Clinical Pharmacogenetics Implementation Consortium (CPIC) Guidelines for CYP3A5 Genotype and Tacrolimus Dosing. Clin Pharmacol Ther. 2015 Sep;98(3):19-24.",
            "Hicks JK, Bishop JR, Sangkuhl K, et al. Clinical Pharmacogenetics Implementation Consortium (CPIC) guideline for CYP2D6 and CYP2C19 genotypes and dosing of selective serotonin reuptake inhibitors. Clin Pharmacol Ther. 2015 Aug;98(2):127-34.",
            "Moriyama B, Obeng AO, Barbarino J, et al. Clinical Pharmacogenetics Implementation Consortium (CPIC) Guidelines for CYP2C19 and Voriconazole Therapy. Clin Pharmacol Ther. 2017 Jan;101(1):45-51."
        ]
    },
    { 
        name: "Monocyte count", 
        definition: "The number of monocytes in the blood, white blood cells involved in immune responses and tissue repair.",
        variants: "13.5 million variants",
 
        genes: "CYP2C19, CYP2C9 , CYP2D6 ",
        bibliography: [
            "Vuckovic D, Bao EL, Akbari P, et al. The polygenic and monogenic basis of blood traits and diseases. Cell. 2020 Sep 17;182(6):1214-1231.e11.",
            "Astle WJ, Elding H, Jiang T, et al. The allelic landscape of human blood and white blood cell phenotypes. Science. 2016 Dec 23;354(6319):aaf8969.",
            "Chen MH, Raffield LM, Mousas A, et al. Trans-ethnic and ancestry-specific blood-cell genetics in 746,667 individuals from 5 global populations. Cell. 2020 Sep 17;182(6):1198-1213.e14."
        ]
    },
    {
        name: "Morning circadian rythm (Morning person)",
        definition: "The preference for early morning activity and early sleep, influenced by genetic factors affecting circadian rhythms.",
        variants: "13.5 million variants",
        genes: "CYP2C9 , CYP2C19, CYP2C8 ",
        bibliography: [
            "Lane JM, Vlasac IM, Anderson SG, et al. Genome-wide association analysis identifies novel loci for chronotype in 100,420 individuals from the UK Biobank. Nat Commun. 2016 Jan 29;7:10889.",
            "Jones SE, Lane JM, Wood AR, et al. Genome-wide association analyses of chronotype in 697,828 individuals provides insights into circadian rhythms. Nat Commun. 2019 Jan 29;10(1):343.",
            "Dashti HS, Jones SE, Wood AR, et al. Genome-wide association study identifies genetic loci for self-reported habitual sleep duration supported by accelerometer-derived estimates. Nat Commun. 2019 Mar 7;10(1):1100."
        ]
    },
    { 
        name: "Mouth ulcers", 
        definition: "Recurring sores in the mouth that can be influenced by genetic factors affecting immune responses.",
        variants: "13.5 million variants",
        loci: "37 loci",
        genes: "(37) CCDC8, CCR2, CEBPB, CRB1, CYP21A2, etc.",
        bibliography: [
            "Barton AR, Sherman MA, et al. Whole-exome imputation within UK Biobank powers rare coding variant association and fine-mapping analyses. Nat Genet. 2021 Aug;53(8):1260-1269.",
            "Shi F, Zhao M, Zheng S, et al. Advances in genetic variation in metabolism-related fatty liver disease. Front Genet. 2023 Sep 11;14:1213916.",
            "Sookoian S, Pirola CJ. Liver enzymes, metabolomics and genome-wide association studies: from systems biology to the personalized medicine. World J Gastroenterol. 2015 Jan 21;21(3):711-25."
        ]
    },
    { 
        name: "Nasion prominence", 
        definition: "The prominence of the nasion (the point where the nasal bones meet the frontal bone), influenced by genetic factors.",
        variants: "13.5 million variants",
        loci: "85 loci",
        genes: "(81) ACVR2A, AGBL1, ARNTL, ARPP21, BBX, etc.",
        bibliography: [
            "Adhikari K, Fontanil T, Cal S, et al. A genome-wide association scan in admixed Latin Americans identifies loci influencing facial and scalp hair features. Nat Commun. 2016 Jan 19;7:10815.",
            "Liu F, van der Lijn F, Schurmann C, et al. A genome-wide association study identifies five loci influencing facial morphology in Europeans. PLoS Genet. 2012 Sep;8(9):e1002932.",
            "Paternoster L, Zhurov AI, Toma AM, et al. Genome-wide association study of three-dimensional facial morphology identifies a variant in PAX3 associated with nasion position. Am J Hum Genet. 2012 Mar 9;90(3):478-85."
        ]
    },
    { 
        name: "Neuroticisms", 
        definition: "A personality trait characterized by emotional instability and negative emotions, influenced by genetic factors.",
        variants: "13.5 million variants",

        genes: "CLOCK , BMAL1 , PER1, CRY1 , PER3 ",
        bibliography: [
            "Nagel M, Jansen PR, Stringer S, et al. Meta-analysis of genome-wide association studies for neuroticism in 449,484 individuals identifies novel genetic loci and pathways. Nat Genet. 2018 Jul;50(7):920-927.",
            "Luciano M, Hagenaars SP, Davies G, et al. Association analysis in over 329,000 individuals identifies 116 independent variants influencing neuroticism. Nat Genet. 2018 Jan;50(1):6-11.",
            "Smith DJ, Escott-Price V, Davies G, et al. Genome-wide analysis of over 106 000 individuals identifies 9 neuroticism-associated loci. Mol Psychiatry. 2016 Jun;21(6):749-57."
        ]
    },
    { 
        name: "Neutrophil count", 
        definition: "The number of neutrophils in the blood, white blood cells involved in fighting bacterial infections.",
        variants: "13.5 million variants",
        loci: "636 loci",
        genes: "(464) AAMP, ABCA7, ABCC5, ABL1, ABO, etc.",
        bibliography: [
            "Vuckovic D, Bao EL, Akbari P, et al. The polygenic and monogenic basis of blood traits and diseases. Cell. 2020 Sep 17;182(6):1214-1231.e11.",
            "Astle WJ, Elding H, Jiang T, et al. The allelic landscape of human blood and white blood cell phenotypes. Science. 2016 Dec 23;354(6319):aaf8969.",
            "Chen MH, Raffield LM, Mousas A, et al. Trans-ethnic and ancestry-specific blood-cell genetics in 746,667 individuals from 5 global populations. Cell. 2020 Sep 17;182(6):1198-1213.e14."
        ]
    },
    { 
        name: "Nicotine dependence after prolonged consumption", 
        definition: "The development of addiction to nicotine after extended use, influenced by genetic factors affecting addiction susceptibility.",
        variants: "13.5 million variants",
        loci: "6 loci",
        genes: "(6) CHRNA4, CHRNB3, CYP2A6, FAM163B, GNAI1, HYKK.",
        bibliography: [
            "Liu M, Jiang Y, Wedow R, et al. Association studies of up to 1.2 million individuals yield new insights into the genetic etiology of tobacco and alcohol use. Nat Genet. 2019 Feb;51(2):237-244.",
            "Bierut LJ, Madden PA, Breslau N, et al. Novel genes identified in a high-density genome wide association study for nicotine dependence. Hum Mol Genet. 2007 Jan 15;16(2):24-35.",
            "Thorgeirsson TE, Geller F, Sulem P, et al. A variant associated with nicotine dependence, lung cancer and peripheral arterial disease. Nature. 2008 Apr 3;452(7187):638-42."
        ]
    },
    { 
        name: "Permanent tooth eruption", 
        definition: "The timing and pattern of permanent tooth development and eruption, influenced by genetic factors.",
        variants: "13.5 million variants",
        loci: "37 loci",
        genes: "(38) ANAPC4, AOPEP, BCL11B, BCL2, DNF, etc.",
        bibliography: [
            "Barton AR, Sherman MA, et al. Whole-exome imputation within UK Biobank powers rare coding variant association and fine-mapping analyses. Nat Genet. 2021 Aug;53(8):1260-1269.",
            "Shi F, Zhao M, Zheng S, et al. Advances in genetic variation in metabolism-related fatty liver disease. Front Genet. 2023 Sep 11;14:1213916.",
            "Sookoian S, Pirola CJ. Liver enzymes, metabolomics and genome-wide association studies: from systems biology to the personalized medicine. World J Gastroenterol. 2015 Jan 21;21(3):711-25."
        ]
    },
    { 
        name: "Persistence of fetal hemoglobin", 
        definition: "The continued production of fetal hemoglobin after birth, which can be influenced by genetic factors.",
        variants: "13.5 million variants",

        genes: "BCL11A , KLF1 , MYB, HBB ",
        bibliography: [
            "Bauer DE, Kamran SC, Lessard S, et al. An erythroid enhancer of BCL11A subject to genetic variation determines fetal hemoglobin level. Science. 2013 Nov 15;342(6155):253-7.",
            "Menzel S, Garner C, Gut I, et al. A QTL influencing F cell production maps to a gene encoding a zinc-finger protein on chromosome 2p15. Nat Genet. 2007 Oct;39(10):1197-9.",
            "Uda M, Galanello R, Sanna S, et al. Genome-wide association study shows BCL11A associated with persistent fetal hemoglobin and amelioration of the phenotype of beta-thalassemia. Proc Natl Acad Sci U S A. 2008 Feb 5;105(5):1620-5."
        ]
    },
    { 
        name: "Photic sneeze reflex", 
        definition: "A reflex that causes sneezing when exposed to bright light, influenced by genetic factors.",
        variants: "13.5 million variants",

        genes: "ZEB2 , NR2E3 , RHO",
        bibliography: [
            "Eriksson N, Macpherson JM, Tung JY, et al. Web-based, participant-driven studies yield novel genetic associations for common traits. PLoS Genet. 2010 Jun 24;6(6):e1000993.",
            "Lane JM, Vlasac IM, Anderson SG, et al. Genome-wide association analysis identifies novel loci for chronotype in 100,420 individuals from the UK Biobank. Nat Commun. 2016 Jan 29;7:10889.",
            "Jones SE, Lane JM, Wood AR, et al. Genome-wide association analyses of chronotype in 697,828 individuals provides insights into circadian rhythms. Nat Commun. 2019 Jan 29;10(1):343."
        ]
    },
    { 
        name: "Pigmented rings on the iris", 
        definition: "The presence and pattern of pigmented rings on the iris, influenced by genetic factors affecting eye pigmentation.",
        variants: "13.5 million variants",
        loci: "Multiple loci including eye pigmentation and development variants",
        genes: "HLA-B (major histocompatibility complex class I B), HLA-A (major histocompatibility complex class I A), HLA-C (major histocompatibility complex class I C), TAP1 (transporter 1 ATP binding cassette subfamily B member)",
        bibliography: [
            "Liu F, Wollstein A, Hysi PG, et al. Digital quantification of human eye color highlights genetic association of three new loci. PLoS Genet. 2010 May 20;6(5):e1000934.",
            "Eriksson N, Macpherson JM, Tung JY, et al. Web-based, participant-driven studies yield novel genetic associations for common traits. PLoS Genet. 2010 Jun 24;6(6):e1000993.",
            "Hysi PG, Valdes AM, Liu F, et al. Genome-wide association meta-analysis of individuals of European ancestry identifies new loci explaining a substantial fraction of hair color variation and heritability. Nat Genet. 2018 Jun;50(6):652-656."
        ]
    },
    { 
        name: "Probability of having red hair", 
        definition: "The likelihood of having red hair, determined by genetic factors affecting melanin production.",
        variants: "13.5 million variants",
        loci: "Multiple loci including MC1R and pigmentation variants",
        genes: "MC1R (melanocortin 1 receptor), OCA2 (oculocutaneous albinism II), TYR (tyrosinase), SLC45A2 (solute carrier family 45 member 2)",
        bibliography: [
            "Hysi PG, Valdes AM, Liu F, et al. Genome-wide association meta-analysis of individuals of European ancestry identifies new loci explaining a substantial fraction of hair color variation and heritability. Nat Genet. 2018 Jun;50(6):652-656.",
            "Liu F, Wollstein A, Hysi PG, et al. Digital quantification of human eye color highlights genetic association of three new loci. PLoS Genet. 2010 May 20;6(5):e1000934.",
            "Eriksson N, Macpherson JM, Tung JY, et al. Web-based, participant-driven studies yield novel genetic associations for common traits. PLoS Genet. 2010 Jun 24;6(6):e1000993."
        ]
    },
    { 
        name: "Probability of snoring", 
        definition: "The likelihood of snoring during sleep, which can be influenced by genetic factors affecting airway structure.",
        variants: "13.5 million variants",
        loci: "Multiple loci including sleep apnea and breathing regulation variants",
        genes: "GABRB1 (gamma-aminobutyric acid type A receptor beta1 subunit), GABRB2 (gamma-aminobutyric acid type A receptor beta2 subunit), GABRA4 (gamma-aminobutyric acid type A receptor alpha4 subunit)",
        bibliography: [
            "Lane JM, Vlasac IM, Anderson SG, et al. Genome-wide association analysis identifies novel loci for chronotype in 100,420 individuals from the UK Biobank. Nat Commun. 2016 Jan 29;7:10889.",
            "Jones SE, Lane JM, Wood AR, et al. Genome-wide association analyses of chronotype in 697,828 individuals provides insights into circadian rhythms. Nat Commun. 2019 Jan 29;10(1):343.",
            "Dashti HS, Jones SE, Wood AR, et al. Genome-wide association study identifies genetic loci for self-reported habitual sleep duration supported by accelerometer-derived estimates. Nat Commun. 2019 Mar 7;10(1):1100."
        ]
    },
    {
        name: "PSA (Prostate Specific Antigen) Levels",
        definition: "The level of prostate-specific antigen in the blood, used as a marker for prostate health and influenced by genetic factors.",
        variants: "13.5 million variants",
        loci: "Multiple loci including prostate-specific antigen regulation variants",
        genes: "KLK3 (kallikrein related peptidase 3), AR (androgen receptor), PSA (prostate specific antigen), TMPRSS2 (transmembrane serine protease 2)",
        bibliography: [
            "Eeles RA, Kote-Jarai Z, Al Olama AA, et al. Identification of 23 new prostate cancer susceptibility loci using the iCOGS custom genotyping array. Nat Genet. 2013 Apr;45(4):385-91, 391e1-2.",
            "Al Olama AA, Kote-Jarai Z, Berndt SI, et al. A meta-analysis of 87,040 individuals identifies 23 new susceptibility loci for prostate cancer. Nat Genet. 2014 Oct;46(10):1103-9.",
            "Schumacher FR, Al Olama AA, Berndt SI, et al. Association analyses of more than 140,000 men identify 63 new prostate cancer susceptibility loci. Nat Genet. 2018 Jul;50(7):928-936."
        ]
    },
    { 
        name: "QT Intervals", 
        definition: "A measure of the time between the start of the Q wave and the end of the T wave on an electrocardiogram, influenced by genetic factors.",
        variants: "13.5 million variants",
        loci: "Multiple loci including cardiac conduction and repolarization variants",
        genes: "SCN5A (sodium voltage-gated channel alpha subunit 5), KCNQ1 (potassium voltage-gated channel subfamily Q member 1), KCNH2 (potassium voltage-gated channel subfamily H member 2), KCNE1 (potassium voltage-gated channel subfamily E regulatory subunit 1)",
        bibliography: [
            "Arking DE, Pfeufer A, Post W, et al. A common genetic variant in the NOS1 regulator NOS1AP modulates cardiac repolarization. Nat Genet. 2006 Apr;38(4):644-51.",
            "Newton-Cheh C, Eijgelsheim M, Rice KM, et al. Common variants at ten loci influence QT interval duration in the QTGEN study. Nat Genet. 2009 Apr;41(4):399-406.",
            "Pfeufer A, Sanna S, Arking DE, et al. Common variants at ten loci modulate the QT interval duration in the QTSCD study. Nat Genet. 2009 Apr;41(4):407-14."
        ]
    },
    { 
        name: "Red blood cell count", 
        definition: "The number of red blood cells in the blood, influenced by genetic factors affecting blood cell production.",
        variants: "13.5 million variants",
        loci: "1103 loci",
        genes: "(620) A3GALT2, AAAS, ABCA1, ABCC2, ABCC6,etc.",
        bibliography: [
            "Vuckovic D, Bao EL, Akbari P, et al. The polygenic and monogenic basis of blood traits and diseases. Cell. 2020 Sep 17;182(6):1214-1231.e11.",
            "Astle WJ, Elding H, Jiang T, et al. The allelic landscape of human blood and white blood cell phenotypes. Science. 2016 Dec 23;354(6319):aaf8969.",
            "Chen MH, Raffield LM, Mousas A, et al. Trans-ethnic and ancestry-specific blood-cell genetics in 746,667 individuals from 5 global populations. Cell. 2020 Sep 17;182(6):1198-1213.e14."
        ]
    },
    { 
        name: "Resistin levels", 
        definition: "The level of resistin, a hormone involved in insulin resistance and inflammation, influenced by genetic factors.",
        variants: "13.5 million variants",
        loci: "16 loci",
        genes: "(11) CDK6, EVI5, GSDMC, EMP1, PLAGL1, etc.",
        bibliography: [
            "Barton AR, Sherman MA, et al. Whole-exome imputation within UK Biobank powers rare coding variant association and fine-mapping analyses. Nat Genet. 2021 Aug;53(8):1260-1269.",
            "Shi F, Zhao M, Zheng S, et al. Advances in genetic variation in metabolism-related fatty liver disease. Front Genet. 2023 Sep 11;14:1213916.",
            "Sookoian S, Pirola CJ. Liver enzymes, metabolomics and genome-wide association studies: from systems biology to the personalized medicine. World J Gastroenterol. 2015 Jan 21;21(3):711-25."
        ]
    },
    { 
        name: "Resting heart rate", 
        definition: "The heart rate at rest, influenced by genetic factors affecting cardiovascular function.",
        variants: "13.5 million variants",
        loci: "74 loci",
        genes: "(63) ACHE, ADCK1, ALG10, BAPOC1, ARHGAP10, etc.",
        bibliography: [
            "Eijgelsheim M, Newton-Cheh C, Sotoodehnia N, et al. Genome-wide association analysis identifies multiple loci related to resting heart rate. Hum Mol Genet. 2010 Dec 15;19(24):3885-94.",
            "Den Hoed M, Eijgelsheim M, Esko T, et al. Identification of heart rate-associated loci and their effects on cardiac conduction and rhythm disorders. Nat Genet. 2013 Jun;45(6):621-31.",
            "Arking DE, Pulit SL, Crotti L, et al. Genetic association study of QT interval highlights role for calcium signaling pathways in myocardial repolarization. Nat Genet. 2014 Aug;46(8):826-36."
        ]
    },
    { 
        name: "Risk tendency", 
        definition: "The inclination to engage in risky behaviors, influenced by genetic factors affecting personality and decision-making.",
        variants: "13.5 million variants",
        loci: "306 loci",
        genes: "(244) A3GALT2, ACVR2A, ADGRB3, AGAAKT3, ALOX5, etc.",
        bibliography: [
            "Lee J.J., Wedow R., et al. Gene discovery and polygenic prediction from a genome-wide association study of educational attainment in 1.1 million individuals. Nature Genetics, 23 Jul 2018, 50(8):1112-1121.",
            "Savage JE, Jansen PR, Stringer S, et al. Genome-wide association meta-analysis in 269,867 individuals identifies new genetic and functional links to intelligence. Nat Genet. 2018 Jul;50(7):912-919.",
            "Hill WD, Davies G, Liewald DC, et al. Age-dependent pleiotropy between general cognitive function and major psychiatric disorders. Biol Psychiatry. 2016 Oct 1;80(7):266-73."
        ]
    },
    { 
        name: "Secretor status and ABH antigens (FUT2 gene)", 
        definition: "The ability to secrete blood group antigens in body fluids, determined by genetic variations in the FUT2 gene.",
        variants: "13.5 million variants",
        loci: "25 loci",
        genes: "(13) ABO, ACFD1, FUT3, GBGT1, HNF1A, etc.",
        bibliography: [
            "Barton AR, Sherman MA, et al. Whole-exome imputation within UK Biobank powers rare coding variant association and fine-mapping analyses. Nat Genet. 2021 Aug;53(8):1260-1269.",
            "Shi F, Zhao M, Zheng S, et al. Advances in genetic variation in metabolism-related fatty liver disease. Front Genet. 2023 Sep 11;14:1213916.",
            "Sookoian S, Pirola CJ. Liver enzymes, metabolomics and genome-wide association studies: from systems biology to the personalized medicine. World J Gastroenterol. 2015 Jan 21;21(3):711-25."
        ]
    },
    { 
        name: "Selectin E levels", 
        definition: "The level of E-selectin, a cell adhesion molecule involved in inflammation, influenced by genetic factors.",
        variants: "13.5 million variants",
        loci: "Multiple loci including selectin and adhesion molecule variants",
        genes: "FUT2 (fucosyltransferase 2), FUT1 (fucosyltransferase 1), ABO (ABO blood group system), H (H antigen)",
        bibliography: [
            "Barton AR, Sherman MA, et al. Whole-exome imputation within UK Biobank powers rare coding variant association and fine-mapping analyses. Nat Genet. 2021 Aug;53(8):1260-1269.",
            "Shi F, Zhao M, Zheng S, et al. Advances in genetic variation in metabolism-related fatty liver disease. Front Genet. 2023 Sep 11;14:1213916.",
            "Sookoian S, Pirola CJ. Liver enzymes, metabolomics and genome-wide association studies: from systems biology to the personalized medicine. World J Gastroenterol. 2015 Jan 21;21(3):711-25."
        ]
    },
    { 
        name: "Serum albumin levels", 
        definition: "The level of albumin in the blood, a protein that helps maintain blood volume and transport substances, influenced by genetic factors.",
        variants: "13.5 million variants",
        loci: "353 loci",
        genes: "(373) ABCA10, ABCA8, ABCA9, ABO, ACE, etc.",
        bibliography: [
            "Barton AR, Sherman MA, et al. Whole-exome imputation within UK Biobank powers rare coding variant association and fine-mapping analyses. Nat Genet. 2021 Aug;53(8):1260-1269.",
            "Shi F, Zhao M, Zheng S, et al. Advances in genetic variation in metabolism-related fatty liver disease. Front Genet. 2023 Sep 11;14:1213916.",
            "Sookoian S, Pirola CJ. Liver enzymes, metabolomics and genome-wide association studies: from systems biology to the personalized medicine. World J Gastroenterol. 2015 Jan 21;21(3):711-25."
        ]
    },
    { 
        name: "Sex hormone regulation (SHBG)", 
        definition: "The regulation of sex hormones through sex hormone-binding globulin, influenced by genetic factors affecting hormone metabolism.",
        variants: "13.5 million variants",
        loci: "553 loci",
        genes: "(940) AADATA, ABCA1, ABCA6, ABCA8, ABCB6, etc.",
        bibliography: [
            "Barton AR, Sherman MA, et al. Whole-exome imputation within UK Biobank powers rare coding variant association and fine-mapping analyses. Nat Genet. 2021 Aug;53(8):1260-1269.",
            "Shi F, Zhao M, Zheng S, et al. Advances in genetic variation in metabolism-related fatty liver disease. Front Genet. 2023 Sep 11;14:1213916.",
            "Sookoian S, Pirola CJ. Liver enzymes, metabolomics and genome-wide association studies: from systems biology to the personalized medicine. World J Gastroenterol. 2015 Jan 21;21(3):711-25."
        ]
    },
    { 
        name: "Skin melanin levels", 
        definition: "The amount of melanin pigment in the skin, which determines skin color and is influenced by genetic factors.",
        variants: "13.5 million variants",
        loci: "193 loci",
        genes: "(122) ACHE, ADOA, HCYA, HRANGPTL2, ANKRD11, etc.",
        bibliography: [
            "Hysi PG, Valdes AM, Liu F, et al. Genome-wide association meta-analysis of individuals of European ancestry identifies new loci explaining a substantial fraction of hair color variation and heritability. Nat Genet. 2018 Jun;50(6):652-656.",
            "Liu F, Wollstein A, Hysi PG, et al. Digital quantification of human eye color highlights genetic association of three new loci. PLoS Genet. 2010 May 20;6(5):e1000934.",
            "Eriksson N, Macpherson JM, Tung JY, et al. Web-based, participant-driven studies yield novel genetic associations for common traits. PLoS Genet. 2010 Jun 24;6(6):e1000993."
        ]
    },
    { 
        name: "Sleep duration", 
        definition: "The natural duration of sleep needed by an individual, influenced by genetic factors affecting sleep regulation.",
        variants: "13.5 million variants",
        loci: "52 loci",
        genes: "(48) ACVR2A, ARRDC1, ASCL4, BANK1, BUD13, etc.",
        bibliography: [
            "Lane JM, Vlasac IM, Anderson SG, et al. Genome-wide association analysis identifies novel loci for chronotype in 100,420 individuals from the UK Biobank. Nat Commun. 2016 Jan 29;7:10889.",
            "Jones SE, Lane JM, Wood AR, et al. Genome-wide association analyses of chronotype in 697,828 individuals provides insights into circadian rhythms. Nat Commun. 2019 Jan 29;10(1):343.",
            "Dashti HS, Jones SE, Wood AR, et al. Genome-wide association study identifies genetic loci for self-reported habitual sleep duration supported by accelerometer-derived estimates. Nat Commun. 2019 Mar 7;10(1):1100."
        ]
    },
    { 
        name: "Smell",
        definition: "The ability to detect and distinguish different odors, influenced by genetic factors affecting olfactory receptors.",
        variants: "13.5 million variants",
        loci: "34 loci",
        genes: "(34) ADCY5, ALDH8A1, ARHGAP42, ASCC2, ATF1,etc.",
        bibliography: ["Add bibliography here"]
    },
    {
        name: "Spleen volume",
        definition: "The size of the spleen, which can be influenced by genetic factors affecting organ development.",
        variants: "13.5 million variants",
        loci: "Multiple loci including spleen development and immune regulation variants",
        genes: "CLOCK (clock circadian regulator), BMAL1 (aryl hydrocarbon receptor nuclear translocator like), PER1 (period circadian regulator 1), CRY1 (cryptochrome circadian regulator 1), PER3 (period circadian regulator 3)",
        bibliography: ["Add bibliography here"]
    },
    { 
        name: "Telomere length", 
        definition: "The length of telomeres, protective caps at the ends of chromosomes that shorten with age and are influenced by genetic factors.",
        variants: "13.5 million variants",
        loci: "20 loci",
        genes: "(20) C11orf65, DCAF4, GMEB2, MOB1, BMP, etc.",
        bibliography: ["Add bibliography here"]
    },
    { 
        name: "Thyroid function (TSH levels)", 
        definition: "The function of the thyroid gland, measured by thyroid-stimulating hormone levels, influenced by genetic factors.",
        variants: "13.5 million variants",
        loci: "20 loci",
        genes: "(42) ABO, ADCY9, BCAS3, C9orf92, CADM1, etc.",
        bibliography: ["Add bibliography here"]
    },
    { 
        name: "Tooth morphology", 
        definition: "The shape and structure of teeth, influenced by genetic factors affecting dental development.",
        variants: "13.5 million variants",
        loci: "442 loci",
        genes: "(432) A1CF, ABCA8, ABCA9, ABCF2-H2BK1, ABO, etc.",
        bibliography: ["Add bibliography here"]
    },
    { 
        name: "Total serum protein levels", 
        definition: "The total amount of protein in the blood, influenced by genetic factors affecting protein production and metabolism.",
        variants: "13.5 million variants",
        loci: "Multiple loci including protein synthesis and regulation variants",
        genes: "TSHR (thyroid stimulating hormone receptor), TG (thyroglobulin), TPO (thyroid peroxidase), DIO1 (iodothyronine deiodinase 1), DIO2 (iodothyronine deiodinase 2)",
        bibliography: ["Add bibliography here"]
    },
    { 
        name: "Usual walking pace", 
        definition: "The natural walking speed of an individual, influenced by genetic factors affecting muscle function and coordination.",
        variants: "13.5 million variants",
        loci: "53 loci",
        genes: "(47) ADGRB2, AHCY, ANAPC4, ARHGAP15, AUTS2, etc.",
        bibliography: ["Add bibliography here"]
    },
    { 
        name: "White blood cell count", 
        definition: "The total number of white blood cells in the blood, influenced by genetic factors affecting immune cell production.",
        variants: "13.5 million variants",
        loci: "1026 loci",
        genes: "(601) AAMP, ABCB1, ABCC5, ABL1, ABO, etc.",
        bibliography: ["Add bibliography here"]
    }
];
