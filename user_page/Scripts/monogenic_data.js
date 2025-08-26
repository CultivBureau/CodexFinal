const monogenicData = [
    {
        name: "Alpha-1 Antitrypsin Deficiency",
        definition: "Autosomal recessive disorder causing liver dysfunction and chronic obstructive pulmonary disease. Severity depends on SERPINA1 gene variants and reduced alpha-1 antitrypsin activity.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) SERPINA1",
        bibliography: ["Alpha-1 Foundation. Alpha-1 Antitrypsin Deficiency. [2024]", "American Lung Association. Alpha-1 Antitrypsin Deficiency. [2024]"]
    },
    {
        name: "Familial adenomatous polyposis",
        definition: "Inherited disease characterized by colorectal polyps and increased predisposition to colorectal cancer. Caused by pathogenic variants in APC and MUTYH genes affecting polyp formation.",
        variants: "13.5 million variants",
        loci: "2 loci",
        genes: "(2) APC, MUTYH",
        bibliography: ["Colon Cancer Coalition. FAP Information. [2024]", "American Cancer Society. Familial Adenomatous Polyposis. [2024]"]
    },
    {
        name: "Hereditary hemochromatosis associated with HFE",
        definition: "Autosomal recessive disease causing systemic iron overload due to HFE gene defects affecting hepcidin hormone involved in iron homeostasis. Relatively common with 1/300 prevalence.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) HFE",
        bibliography: ["Iron Disorders Institute. Hereditary Hemochromatosis. [2024]", "American Liver Foundation. Hemochromatosis. [2024]"]
    },
    {
        name: "Acute intermittent porphyria",
        definition: "Most common form of porphyria, affecting heme synthesis and causing abdominal pain, gastrointestinal dysfunction, and neurological disturbances. Characterized by low penetrance variants in the HMBS gene.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) HMBS",
        bibliography: ["Porphyria Foundation. Acute Intermittent Porphyria. [2024]", "National Organization for Rare Disorders. Acute Intermittent Porphyria. [2024]"]
    },
    {
        name: "Agenesis of the Corpus Callosum with Peripheral Neuropathy (ACCPN)",
        definition: "Progressive sensorimotor pathology with mental retardation and partial/complete absence of the corpus callosum. Caused by SLC12A6 gene variants, particularly prevalent in Quebec, Canada.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) SLC12A6",
        bibliography: ["Andermann Syndrome Foundation. ACCPN Information. [2024]", "National Center for Advancing Translational Sciences. Andermann Syndrome. [2024]"]
    },
    {
        name: "Alpha-mannosidosis",
        definition: "Inherited lysosomal storage disease causing immune system alterations, facial/skeletal abnormalities, and hearing/intellectual problems. Caused by MAN2B1 gene deficiency.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) MAN2B1",
        bibliography: ["National Organization for Rare Disorders. Alpha-Mannosidosis. [2024]", "Lysosomal Disease Network. Alpha-Mannosidosis. [2024]"]
    },
    {
        name: "ARSACS (Autosomal recessive spastic ataxia of Charlevoix-Saguenay)",
        definition: "Neurodegenerative pathology with early progressive cerebellar ataxia, peripheral sensorimotor neuropathy, and muscle rigidity. Caused by SACS gene variants.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) SACS",
        bibliography: ["ARSACS Foundation. ARSACS Information. [2024]", "National Ataxia Foundation. ARSACS. [2024]"]
    },
    {
        name: "Autosomal recessive polycystic kidney disease",
        definition: "Recessively inherited disorder producing multiple kidney cysts and congenital hepatic fibrosis. Caused by PKHD1 gene variants affecting fibrocystin protein.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) PKHD1",
        bibliography: ["PKD Foundation. Autosomal Recessive PKD. [2024]", "National Kidney Foundation. ARPKD Information. [2024]"]
    },
    {
        name: "Beta Thalassemia",
        definition: "Hereditary anemia with decreased synthesis of beta-globin chains of hemoglobin. Caused by HBB gene mutations, common in Mediterranean, Southeast Asia, and Middle Eastern populations.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) HBB",
        bibliography: ["Cooley's Anemia Foundation. Beta Thalassemia. [2024]", "Thalassemia International Federation. Beta Thalassemia. [2024]"]
    },
    {
        name: "Biotinidase deficiency",
        definition: "Inborn error of metabolism causing seizures, breathing difficulty, hypotonia, skin rashes, alopecia, hearing loss, and developmental delay. Caused by BTD gene variants.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) BTD",
        bibliography: ["Biotinidase Deficiency Foundation. Biotinidase Deficiency. [2024]", "National Organization for Rare Disorders. Biotinidase Deficiency. [2024]"]
    },
    {
        name: "Birt-Hogg-Dube syndrome",
        definition: "Autosomal dominant disease with skin lesions, pulmonary cysts, spontaneous pneumothorax, and increased renal cancer predisposition. Caused by FLCN tumor suppressor gene variants.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) FLCN",
        bibliography: ["Birt-Hogg-Dubé Syndrome Foundation. BHD Information. [2024]", "National Cancer Institute. Birt-Hogg-Dubé Syndrome. [2024]"]
    },
    {
        name: "Bloom syndrome",
        definition: "Disease causing genomic instability due to BLM gene variants affecting DNA repair and replication. Characterized by early cancer predisposition, short stature, and telangiectasia.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) BLM",
        bibliography: ["Bloom's Syndrome Registry. Bloom Syndrome. [2024]", "National Organization for Rare Disorders. Bloom Syndrome. [2024]"]
    },
    {
        name: "Brugada Syndrome",
        definition: "Rare hereditary arrhythmia increasing cardiac arrest risk without structural heart alterations. Caused by SCN5A gene variants affecting cardiac sodium channels.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) SCN5A",
        bibliography: ["Brugada Syndrome Foundation. Brugada Syndrome. [2024]", "American Heart Association. Brugada Syndrome. [2024]"]
    },
    {
        name: "Canavan Disease",
        definition: "Progressive neurodegenerative disease deteriorating brain white matter and affecting nerve impulse transmission. Caused by ASPA gene mutations affecting aspartoacylase enzyme.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) ASPA",
        bibliography: ["Canavan Foundation. Canavan Disease. [2024]", "National Institute of Neurological Disorders and Stroke. Canavan Disease. [2024]"]
    },
    {
        name: "cblA Type Methylmalonic aciduria",
        definition: "Inborn error of metabolism affecting protein and lipid degradation, producing abnormal methylmalonic acid levels and metabolic acidosis. Caused by MMAA gene variants.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) MMAA",
        bibliography: ["Organic Acidemia Association. Methylmalonic Acidemia. [2024]", "National Organization for Rare Disorders. cblA Type MMA. [2024]"]
    },
    {
        name: "cblB Type Methylmalonic aciduria",
        definition: "Inborn error of vitamin B12 metabolism with decreased mitochondrial enzyme methylmalonyl-CoA mutase function. Caused by MMAB gene variants affecting cobalamin metabolism.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) MMAB",
        bibliography: ["Organic Acidemia Association. Methylmalonic Acidemia. [2024]", "National Organization for Rare Disorders. cblB Type MMA. [2024]"]
    },
    {
        name: "Classical homocystinuria due to CBS deficiency",
        definition: "Most common error of sulfur amino acid metabolism due to CBS enzyme deficiency. Results in increased homocysteine affecting growth, development, and increasing atherosclerosis susceptibility.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) CBS",
        bibliography: ["Homocystinuria Foundation. CBS Deficiency. [2024]", "National Organization for Rare Disorders. Homocystinuria. [2024]"]
    },
    {
        name: "Complete achromatopsia (type 2) and Incomplete achromatopsia",
        definition: "Rare autosomal recessive retinal disorder causing color blindness, nystagmus, photophobia, and reduced visual acuity. Caused by cone photoreceptor cell deficiency affecting multiple genes.",
        variants: "13.5 million variants",
        loci: "5 loci",
        genes: "(5) ATF6, CNGA3, CNGB3, PDE6C, PDE6H",
        bibliography: ["Achromatopsia Foundation. Achromatopsia Information. [2024]", "National Eye Institute. Achromatopsia. [2024]"]
    },
    {
        name: "Congenital disorder of glycosylation type 1a (PMM2-CDG)",
        definition: "Autosomal recessive disease affecting glycoprotein synthesis enzymes, primarily impacting central and peripheral nervous systems. Caused by phosphomannomutase 2 deficiency.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) PMM2",
        bibliography: ["CDG Foundation. PMM2-CDG Information. [2024]", "National Organization for Rare Disorders. PMM2-CDG. [2024]"]
    },
    {
        name: "Congenital muscular alpha-dystroglycanopathy and Walker-Warburg syndrome",
        definition: "Heterogeneous group of inherited muscle diseases affecting skeletal muscle development from birth. Caused by abnormal glycosylation of α-dystroglycans affecting 8 genes encoding glycosyltransferase enzymes.",
        variants: "13.5 million variants",
        loci: "8 loci",
        genes: "(8) FKRP, FKTN, POMGNT1, POMT1, POMT2",
        bibliography: ["Muscular Dystrophy Association. Dystroglycanopathies. [2024]", "National Institute of Neurological Disorders and Stroke. Walker-Warburg Syndrome. [2024]"]
    },
    {
        name: "Congenital myasthenic syndrome",
        definition: "Rare inherited disorders affecting neuromuscular transmission, resulting in muscle weakness accentuated by exertion. Up to 35 genes involved, classified into 14 groups by pathomechanical characteristics.",
        variants: "13.5 million variants",
        loci: "35 loci",
        genes: "(35) RAPSN",
        bibliography: ["Myasthenia Gravis Foundation. Congenital Myasthenic Syndrome. [2024]", "National Organization for Rare Disorders. CMS. [2024]"]
    },
    {
        name: "Congenital stationary night blindness 1C",
        definition: "Rare nonprogressive retinal disorder appearing in childhood, affecting phototransduction cascade proteins. TRPM1 gene defects cause ON bipolar cell dysfunction with reduced rod photoreceptor response.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) TRPM1",
        bibliography: ["Foundation Fighting Blindness. Congenital Stationary Night Blindness. [2024]", "National Eye Institute. CSNB. [2024]"]
    },
    {
        name: "Cowden syndrome",
        definition: "Rare multisystem disease increasing predisposition to benign hamartomas and malignant tumors. Caused by PTEN gene mutations, affecting breast, thyroid, and endometrial cancer risk.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) PTEN",
        bibliography: ["PTEN Hamartoma Tumor Syndrome Foundation. Cowden Syndrome. [2024]", "National Cancer Institute. Cowden Syndrome. [2024]"]
    },
    {
        name: "Cystic fibrosis",
        definition: "Autosomal recessive disease damaging respiratory system and other organs due to CFTR protein defects. Affects epithelial cells, causing thick mucous secretions and organ obstruction.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) CFTR",
        bibliography: ["Cystic Fibrosis Foundation. Cystic Fibrosis. [2024]", "National Heart, Lung, and Blood Institute. CF. [2024]"]
    },
    {
        name: "Cystinosis",
        definition: "Rare autosomal recessive lysosomal storage disorder with cystine accumulation in organs and tissues. Caused by CTNS gene defects affecting cystinosin transport protein.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) CTNS",
        bibliography: ["Cystinosis Foundation. Cystinosis Information. [2024]", "National Organization for Rare Disorders. Cystinosis. [2024]"]
    },
    {
        name: "D-Bifunctional Protein Deficiency",
        definition: "Severe disorder of peroxisomal fatty acid beta-oxidation causing neurodegeneration in infancy. Results in VLCFA accumulation and symptoms similar to Zellweger syndrome.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) HSD17B4",
        bibliography: ["Peroxisomal Disorders Foundation. D-BP Deficiency. [2024]", "National Organization for Rare Disorders. D-BP Deficiency. [2024]"]
    },
    {
        name: "Diastrophic dysplasia",
        definition: "Rare autosomal recessive disease causing short stature, short limbs, and joint malformations leading to multiple contractures. More prevalent in Finnish population.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) SLC26A2",
        bibliography: ["Little People of America. Diastrophic Dysplasia. [2024]", "National Organization for Rare Disorders. Diastrophic Dysplasia. [2024]"]
    },
    {
        name: "Dihydrolipoamide Dehydrogenase Deficiency",
        definition: "Autosomal recessive metabolic disorder causing neurological and hepatic impairment with lactic acidosis and growth retardation. Caused by DLD gene variants affecting metabolism.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) DLD",
        bibliography: ["Metabolic Disorders Foundation. DLD Deficiency. [2024]", "National Organization for Rare Disorders. DLD Deficiency. [2024]"]
    },
    {
        name: "Dilated Cardiomyopathy 1A",
        definition: "Condition producing heart muscle weakness and structural alterations, causing left ventricle enlargement and reduced blood pumping. Caused by LMNA gene variants affecting cardiac function.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) LMNA",
        bibliography: ["Cardiomyopathy Association. Dilated Cardiomyopathy. [2024]", "American Heart Association. DCM. [2024]"]
    },
    {
        name: "Dubin-Johnson syndrome",
        definition: "Benign hereditary liver disease causing chronic hyperbilirubinemia and pigment deposition without liver lesions. Caused by ABCC2 gene mutations affecting ion transport proteins.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) ABCC2",
        bibliography: ["Liver Foundation. Dubin-Johnson Syndrome. [2024]", "National Organization for Rare Disorders. Dubin-Johnson. [2024]"]
    },
    {
        name: "Ehlers-Danlos Syndrome (EDS)",
        definition: "Group of 13 inherited connective tissue disorders causing joint hyperlaxity, hyperextensible skin, and fragile blood vessels. Caused by alterations in 19 genes affecting collagen synthesis.",
        variants: "13.5 million variants",
        loci: "19 loci",
        genes: "(19) ADAMTS2, B4GALT7, C1S, COL1A1, COL1A2, COL3A1, COL5A1, FKBP14",
        bibliography: ["Ehlers-Danlos Society. EDS Information. [2024]", "National Organization for Rare Disorders. EDS. [2024]"]
    },
    {
        name: "Familial advanced sleep phase syndrome (FASPS)",
        definition: "Very rare circadian sleep rhythm disorder with early nighttime sleepiness and early awakening. Caused by mutations in PER2 and CSNK1D genes affecting circadian regulation.",
        variants: "13.5 million variants",
        loci: "2 loci",
        genes: "(2) CSNK1D, PER2",
        bibliography: ["Sleep Foundation. FASPS Information. [2024]", "National Sleep Foundation. Advanced Sleep Phase Syndrome. [2024]"]
    },
    {
        name: "Familial breast cancer",
        definition: "Hereditary breast cancer due to BRCA1 and BRCA2 gene mutations, increasing risk of breast, ovarian, prostate, and pancreatic cancer. Accounts for 5-10% of breast cancer cases.",
        variants: "13.5 million variants",
        loci: "2 loci",
        genes: "(2) BRCA1, BRCA2",
        bibliography: ["Breast Cancer Research Foundation. Hereditary Breast Cancer. [2024]", "American Cancer Society. BRCA Gene Mutations. [2024]"]
    },
    {
        name: "Familial dysautonomia (Riley-Day syndrome)",
        definition: "Inherited disorder causing sensory dysfunction and severe autonomic nervous system impairment, resulting in multisystem dysfunction. Almost exclusive to Ashkenazi Jewish population.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) ELP1",
        bibliography: ["Dysautonomia Foundation. Familial Dysautonomia. [2024]", "National Organization for Rare Disorders. Riley-Day Syndrome. [2024]"]
    },
    {
        name: "Familial Hypercholesterolemia",
        definition: "Most common cholesterol metabolism disorder causing elevated LDL-C levels and increased predisposition to atherosclerosis and premature cardiovascular disease. Caused by APOB, LDLR, or PCSK9 variants.",
        variants: "13.5 million variants",
        loci: "3 loci",
        genes: "(3) APOB, LDLR, PCSK9",
        bibliography: ["FH Foundation. Familial Hypercholesterolemia. [2024]", "American Heart Association. FH. [2024]"]
    },
    {
        name: "Familial Hypertrophic Cardiomyopathy (HCM)",
        definition: "Relatively common cardiovascular disease affecting 1 in 500 people, characterized by increased heart muscle mass and disorganization. Caused by pathogenic variants in more than 11 genes affecting sarcomere structure.",
        variants: "13.5 million variants",
        loci: "11 loci",
        genes: "(11) MYH7, MYL2, PRKAG2, TPM1, TTN",
        bibliography: ["Hypertrophic Cardiomyopathy Association. HCM Information. [2024]", "American Heart Association. HCM. [2024]"]
    },
    {
        name: "Familial Mediterranean fever",
        definition: "Autosomal recessive hereditary inflammatory disease characterized by episodes of fever and inflammation of peritoneum, pleura, joints, or skin. Most common in Mediterranean populations.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) MEFV",
        bibliography: ["FMF Foundation. Familial Mediterranean Fever. [2024]", "National Organization for Rare Disorders. FMF. [2024]"]
    },
    {
        name: "Familial Transthyretin Amyloidosis",
        definition: "Rare autosomal dominant disease caused by abnormal amyloid protein deposits in tissues. TTR protein variants cause progressive accumulation in peripheral nervous system, heart, kidneys, and brain.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) TTR",
        bibliography: ["Amyloidosis Foundation. TTR Amyloidosis. [2024]", "National Organization for Rare Disorders. TTR Amyloidosis. [2024]"]
    },
    {
        name: "Familiar hyperinsulinism (ABCC8-related)",
        definition: "Most common cause of severe persistent hypoglycemia in newborns and infants. Caused by ABCC8 gene variants affecting insulin transport, leading to elevated blood insulin levels and severe hypoglycemia.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) ABCC8",
        bibliography: ["Congenital Hyperinsulinism Foundation. ABCC8 Hyperinsulinism. [2024]", "National Organization for Rare Disorders. Hyperinsulinism. [2024]"]
    },
    {
        name: "Fanconi Anemia (FANCC-related)",
        definition: "Inherited disorder of DNA repair characterized by progressive bone marrow failure, congenital malformations, and predisposition to solid or hematological tumors. Caused by variants in up to 22 genes.",
        variants: "13.5 million variants",
        loci: "22 loci",
        genes: "(22) FANCC",
        bibliography: ["Fanconi Anemia Research Fund. Fanconi Anemia. [2024]", "National Organization for Rare Disorders. Fanconi Anemia. [2024]"]
    },
    {
        name: "Gaucher disease",
        definition: "One of the most common lysosomal storage pathologies characterized by glucocerebroside accumulation in liver, spleen, and bone marrow. Caused by GBA gene variants affecting glucocerebrosidase enzyme.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) GBA1",
        bibliography: ["National Gaucher Foundation. Gaucher Disease. [2024]", "National Organization for Rare Disorders. Gaucher Disease. [2024]"]
    },
    {
        name: "Glucose-6-phosphate dehydrogenase deficiency (G6PD deficiency)",
        definition: "Most common enzyme defect in humans, causing deficiency of G6PD enzyme in red blood cells. Results in jaundice and hemolytic anemia, especially triggered by external factors like certain medications.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) G6PD",
        bibliography: ["G6PD Deficiency Association. G6PD Deficiency. [2024]", "National Heart, Lung, and Blood Institute. G6PD Deficiency. [2024]"]
    },
    {
        name: "Glutaric Acidemia type 1",
        definition: "Autosomal recessive neurometabolic disorder characterized by encephalopathic seizures and acute bilateral lesions in brain basal ganglia. Caused by GCDH gene variants affecting glutaryl-CoA dehydrogenase enzyme.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) GCDH",
        bibliography: ["Organic Acidemia Association. Glutaric Acidemia Type 1. [2024]", "National Organization for Rare Disorders. GA-1. [2024]"]
    },
    {
        name: "Glutaric Acidemia type 2",
        definition: "Rare metabolic disease affecting fatty acid and amino acid oxidation, characterized by increased glutaric acid and lactic acid levels. Caused by ETFDH gene variants affecting multiple acyl-CoA dehydrogenase.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) ETFDH",
        bibliography: ["Organic Acidemia Association. Glutaric Acidemia Type 2. [2024]", "National Organization for Rare Disorders. GA-2. [2024]"]
    },
    {
        name: "Glycogen storage disease type 1A (Von Gierke Disease)",
        definition: "Autosomal recessive metabolic disease affecting glucose production from glycogen, leading to abnormal glycogen accumulation and low blood glucose levels. Caused by G6PC1 gene variants affecting glucose-6-phosphatase.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) G6PC1",
        bibliography: ["Association for Glycogen Storage Disease. GSD Type 1A. [2024]", "National Organization for Rare Disorders. Von Gierke Disease. [2024]"]
    },
    {
        name: "Glycogen storage disease type 1B",
        definition: "Autosomal recessive metabolic disease affecting glycogen metabolism, characterized by hepatomegaly, hypoglycemia, neutropenia, and recurrent infections. Caused by SLC37A4 gene variants affecting glucose-6-phosphatase transport.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) SLC37A4",
        bibliography: ["Association for Glycogen Storage Disease. GSD Type 1B. [2024]", "National Organization for Rare Disorders. GSD Type 1B. [2024]"]
    },
    {
        name: "Glycogen storage disease type 3",
        definition: "Autosomal recessive pathology affecting glycogen metabolism characterized by liver, heart, and muscle disorders. Caused by AGL gene variants affecting glycogen debranching enzyme deficiency.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) AGL",
        bibliography: ["Association for Glycogen Storage Disease. GSD Type 3. [2024]", "National Organization for Rare Disorders. GSD Type 3. [2024]"]
    },
    {
        name: "Glycogen storage disease type 5",
        definition: "Metabolic disease affecting glycogen storage with exercise intolerance as characteristic symptom. Caused by PYGM gene variants affecting muscle phosphorylase enzyme deficiency.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) PYGM",
        bibliography: ["Association for Glycogen Storage Disease. GSD Type 5. [2024]", "National Organization for Rare Disorders. McArdle Disease. [2024]"]
    },
    {
        name: "Glycogenosis type 2 or Pompe disease",
        definition: "Autosomal recessive disease affecting glycogen metabolism through acid alpha-glucosidase enzyme alterations. Glycogen accumulates in muscle cell lysosomes causing skeletal and cardiac muscle degeneration.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) GAA",
        bibliography: ["Pompe Disease Foundation. Pompe Disease. [2024]", "National Organization for Rare Disorders. Pompe Disease. [2024]"]
    },
    {
        name: "GRACILE syndrome",
        definition: "Inherited mitochondrial disease characterized by fetal growth restriction, aminoaciduria, cholestasis, and iron overload. Caused by BCS1L gene variants affecting mitochondrial energy production proteins.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) BCS1L",
        bibliography: ["Mitochondrial Disease Foundation. GRACILE Syndrome. [2024]", "National Organization for Rare Disorders. GRACILE. [2024]"]
    },
    {
        name: "Hemophilia A",
        definition: "Rare X-linked disease caused by F8 gene mutations affecting clotting factor VIII, increasing bleeding risk and joint damage. Males are more severely affected due to single X chromosome.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) F8",
        bibliography: ["National Hemophilia Foundation. Hemophilia A. [2024]", "World Federation of Hemophilia. Hemophilia A. [2024]"]
    },
    {
        name: "Hereditary fructose intolerance",
        definition: "Rare disease caused by aldolase B gene variants affecting fructose metabolism enzyme. Characterized by hypoglycemia and severe abdominal symptoms after fructose ingestion.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) ALDOB",
        bibliography: ["Fructose Intolerance Foundation. HFI Information. [2024]", "National Organization for Rare Disorders. HFI. [2024]"]
    },
    {
        name: "Homocystinuria due to MTHFR deficiency",
        definition: "Inherited pathology affecting homocysteine metabolism due to MTHFR enzyme deficiency. Results in increased homocysteine and decreased methionine levels affecting multiple organ systems.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) MTHFR",
        bibliography: ["Homocystinuria Foundation. MTHFR Deficiency. [2024]", "National Organization for Rare Disorders. MTHFR Deficiency. [2024]"]
    },
    {
        name: "Hypokalemic Periodic Paralysis",
        definition: "Autosomal dominant muscle channelopathy causing episodes of muscle weakness and paralysis associated with decreased blood potassium levels. Caused by CACNA1S and SCN4A gene variants affecting muscle ion channels.",
        variants: "13.5 million variants",
        loci: "2 loci",
        genes: "(2) CACNA1S, SCN4A",
        bibliography: ["Periodic Paralysis Association. Hypokalemic PP. [2024]", "National Organization for Rare Disorders. HypoPP. [2024]"]
    },
    {
        name: "Hypophosphatasia",
        definition: "Rare metabolic disease affecting bone and tooth development due to ALPL gene variants causing alkaline phosphatase enzyme deficiency. Results in impaired bone mineralization and various clinical forms.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) ALPL",
        bibliography: ["Soft Bones Foundation. Hypophosphatasia. [2024]", "National Organization for Rare Disorders. HPP. [2024]"]
    },
    {
        name: "Junctional Epidermolysis Bullosa",
        definition: "Autosomal recessive disease characterized by skin and mucous membrane fragility, manifesting with blister formation in response to minimal trauma. Caused by LAMB3 gene variants affecting basement membrane proteins.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) LAMB3",
        bibliography: ["Dystrophic Epidermolysis Bullosa Research Association. JEB. [2024]", "National Organization for Rare Disorders. JEB. [2024]"]
    },
    {
        name: "Leigh Syndrome, French-Canadian type (LSFC)",
        definition: "Mitochondrial disease characterized by chronic metabolic acidosis, hypotonia, facial dysmorphism, and developmental delay. Caused by LRPPRC gene mutations affecting cellular cytoskeleton interactions.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) LRPPRC",
        bibliography: ["Mitochondrial Disease Foundation. French-Canadian Leigh Syndrome. [2024]", "National Organization for Rare Disorders. LSFC. [2024]"]
    },
    {
        name: "Leukoencephalopathy with vanishing white matter",
        definition: "Rare autosomal recessive disease causing deterioration of central nervous system white matter. Caused by EIF2B5 gene variants, leading to progressive neurological deterioration with cerebellar ataxia.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) EIF2B5",
        bibliography: ["United Leukodystrophy Foundation. Vanishing White Matter. [2024]", "National Organization for Rare Disorders. VWM. [2024]"]
    },
    {
        name: "Li-Fraumeni Syndrome",
        definition: "Autosomal dominant pathology characterized by increased risk of developing different types of cancer at early ages. Caused by TP53 gene alterations affecting major tumor suppressor gene function.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) TP53",
        bibliography: ["Li-Fraumeni Syndrome Association. LFS Information. [2024]", "National Cancer Institute. Li-Fraumeni Syndrome. [2024]"]
    },
    {
        name: "Limb-girdle muscular dystrophy",
        definition: "Group of 31 inherited diseases causing progressive weakness and degeneration of skeletal muscles in pelvic and shoulder areas. Caused by mutations in genes involved in structural maintenance of muscle cells.",
        variants: "13.5 million variants",
        loci: "31 loci",
        genes: "(31) CAPN3, FKRP, SGCA, SGCB",
        bibliography: ["Muscular Dystrophy Association. Limb-Girdle MD. [2024]", "National Institute of Neurological Disorders and Stroke. LGMD. [2024]"]
    },
    {
        name: "Long-chain 3-hydroxyacyl-CoA dehydrogenase deficiency",
        definition: "Autosomal recessive inherited disorder of mitochondrial long-chain fatty acid oxidation. Caused by HADHA gene variants affecting mitochondrial beta-oxidation, leading to toxic acyl-CoA ester accumulation.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) HADHA",
        bibliography: ["Fatty Oxidation Disorders Family Support Group. LCHADD. [2024]", "National Organization for Rare Disorders. LCHADD. [2024]"]
    },
    {
        name: "Lynch syndrome",
        definition: "Familial cancer syndrome primarily associated with increased risk of colorectal and endometrial cancer. Caused by pathogenic germline mutations in DNA mismatch repair genes (MMR genes) affecting cancer predisposition.",
        variants: "13.5 million variants",
        loci: "4 loci",
        genes: "(4) MLH1, MSH2, MSH6, PMS2",
        bibliography: ["Lynch Syndrome International. Lynch Syndrome. [2024]", "American Cancer Society. Lynch Syndrome. [2024]"]
    },
    {
        name: "Malignant Hyperthermia",
        definition: "Rare hereditary disease causing rapid body temperature rise and intense muscle contractions triggered by general anesthesia. Caused by RYR1 gene variants affecting muscle calcium channel regulation.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) RYR1",
        bibliography: ["Malignant Hyperthermia Association. MH Information. [2024]", "National Organization for Rare Disorders. Malignant Hyperthermia. [2024]"]
    },
    {
        name: "Maple syrup urine disease type 1B",
        definition: "Inherited disorder of branched-chain amino acid metabolism affecting leucine, isoleucine, and valine. Caused by BCKDC enzyme deficiency, leading to neurological and developmental delay with characteristic urine odor.",
        variants: "13.5 million variants",
        loci: "3 loci",
        genes: "(3) BCKDHA, BCKDHB, DBT",
        bibliography: ["MSUD Family Support Group. Maple Syrup Urine Disease. [2024]", "National Organization for Rare Disorders. MSUD. [2024]"]
    },
    {
        name: "Medium-chain acyl-CoA dehydrogenase deficiency (MCADD)",
        definition: "Most common autosomal recessive disorder of mitochondrial fatty acid beta-oxidation manifesting with rapidly progressive metabolic crises. Caused by ACADM gene variants affecting medium-chain acyl-CoA dehydrogenase enzyme.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) ACADM",
        bibliography: ["Fatty Oxidation Disorders Family Support Group. MCADD. [2024]", "National Organization for Rare Disorders. MCADD. [2024]"]
    },
    {
        name: "Metachromatic leukodystrophy",
        definition: "Lysosomal storage disease causing progressive deterioration of myelin enveloping nerve fibers. Caused by ARSA gene variants affecting arylsulfatase A enzyme, leading to sulfatide accumulation and demyelination.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) ARSA",
        bibliography: ["MLD Foundation. Metachromatic Leukodystrophy. [2024]", "National Organization for Rare Disorders. MLD. [2024]"]
    },
    {
        name: "Methylmalonic aciduria due to methylmalonyl-CoA mutase deficiency",
        definition: "Inborn error of metabolism characterized by methylmalonic acid accumulation due to MMUT gene variants affecting methylmalonyl-CoA mutase enzyme. Results in toxic substance accumulation and blood acidification.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) MMUT, MUT",
        bibliography: ["Organic Acidemia Association. Methylmalonic Acidemia. [2024]", "National Organization for Rare Disorders. MMA. [2024]"]
    },
    {
        name: "Mucolipidosis IV",
        definition: "Rare lysosomal storage disease characterized by severe psychomotor retardation, visual disturbances, and achlorhydria. Caused by MCOLN1 gene variants affecting mucolipin-1 enzyme, especially affecting nervous system.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) MCOLN1",
        bibliography: ["Mucolipidosis IV Foundation. ML IV Information. [2024]", "National Organization for Rare Disorders. ML IV. [2024]"]
    },
    {
        name: "Mucolipidosis type II",
        definition: "Metabolic disease affecting lysosomal enzyme production and function, characterized by mental retardation and bone development alterations. Caused by GNPTAB gene variants affecting N-acetylglucosamine-1-phosphotransferase.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) GNPTAB",
        bibliography: ["Mucolipidosis Foundation. ML II Information. [2024]", "National Organization for Rare Disorders. ML II. [2024]"]
    },
    {
        name: "Multiple endocrine neoplasia 2B",
        definition: "Autosomal dominant disorder predisposing to medullary thyroid cancer and adrenal gland tumors. Caused by RET proto-oncogene mutations, more aggressive than MEN2A with poorer prognosis.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) RET",
        bibliography: ["MEN2 Foundation. Multiple Endocrine Neoplasia 2B. [2024]", "National Cancer Institute. MEN2B. [2024]"]
    },
    {
        name: "Neurofibromatosis type I",
        definition: "One of the most common autosomal dominant diseases with incidence of 1 in 3,000 births. Characterized by neurofibroma formation in skin due to NF1 gene variants affecting neurofibromin tumor suppressor protein.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) NF1",
        bibliography: ["Children's Tumor Foundation. Neurofibromatosis Type 1. [2024]", "National Institute of Neurological Disorders and Stroke. NF1. [2024]"]
    },
    {
        name: "Neuronal Ceroid-Lipofuscinoses type 1 (associated to PPT1)",
        definition: "Neurodegenerative disorder causing progressive intellectual and motor impairment, seizures, and premature death. Caused by PPT1 gene variants affecting lysosomal enzyme responsible for protein degradation.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) PPT1",
        bibliography: ["Batten Disease Support and Research Association. CLN1. [2024]", "National Organization for Rare Disorders. CLN1. [2024]"]
    },
    {
        name: "Neuronal Ceroid-Lipofuscinoses type 3 (associated to CLN3)",
        definition: "Neurodegenerative lysosomal storage disease with symptoms appearing during childhood, characterized by visual problems. Caused by CLN3 gene variants affecting lysosomal function.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) CLN3",
        bibliography: ["Batten Disease Support and Research Association. CLN3. [2024]", "National Organization for Rare Disorders. CLN3. [2024]"]
    },
    {
        name: "Neuronal Ceroid-Lipofuscinoses type 5 (associated to CLN5)",
        definition: "Neurodegenerative disease causing delayed psychomotor development and visual problems. Caused by CLN5 gene variants affecting enzyme that regulates lysosomal trafficking.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) CLN5",
        bibliography: ["Batten Disease Support and Research Association. CLN5. [2024]", "National Organization for Rare Disorders. CLN5. [2024]"]
    },
    {
        name: "Neuronal Ceroid-Lipofuscinoses type 6 (associated to CLN6)",
        definition: "Also known as Batten disease, causing progressive myoclonic epilepsy and motor impairment. Caused by CLN6 gene variants affecting transmembrane protein of endoplasmic reticulum.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) CLN6",
        bibliography: ["Batten Disease Support and Research Association. CLN6. [2024]", "National Organization for Rare Disorders. CLN6. [2024]"]
    },
    {
        name: "Neuronal Ceroid-Lipofuscinoses type 7 (associated to MFSD8)",
        definition: "Lysosomal storage disease affecting MFSD8 gene that produces protein involved in ion transport across lysosome membrane. Caused by MFSD8 gene variants affecting lysosomal function.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) MFSD8",
        bibliography: ["Batten Disease Support and Research Association. CLN7. [2024]", "National Organization for Rare Disorders. CLN7. [2024]"]
    },
    {
        name: "Niemann-Pick disease type A",
        definition: "Very severe subtype of Niemann-Pick disease affecting lysosomes, causing developmental delay, hepatosplenomegaly, and severe neurodegenerative disorders. Caused by SMPD1 gene variants affecting acid sphingomyelinase.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) SMPD1",
        bibliography: ["National Niemann-Pick Disease Foundation. NPD Type A. [2024]", "National Organization for Rare Disorders. NPD Type A. [2024]"]
    },
    {
        name: "Non-syndromic mitochondrial hearing loss",
        definition: "Pathology causing hearing loss due to pathogenic variants in mitochondrial DNA genes. Inherited maternally, often triggered by aminoglycoside antibiotics, with 12S rRNA gene commonly affected.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) 12S RNA (MTRNR1)",
        bibliography: ["Hearing Loss Association of America. Mitochondrial Hearing Loss. [2024]", "National Institute on Deafness and Other Communication Disorders. Hearing Loss. [2024]"]
    },
    {
        name: "Nonsyndromic Hearing Loss and Deafness, DFNB1",
        definition: "Type of deafness appearing at birth caused by GJB2 gene variants encoding connexin 26 protein. Affects 70% of neonates with congenital hereditary hearing deficiency, most common in Caucasian population.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) GJB2",
        bibliography: ["Hearing Loss Association of America. DFNB1. [2024]", "National Institute on Deafness and Other Communication Disorders. DFNB1. [2024]"]
    },
    {
        name: "Pendred syndrome",
        definition: "Most common form of syndromic deafness occurring with enlarged thyroid gland or goiter, with or without hypothyroidism. Caused by SLC26A4 gene variants affecting pendrin ion transport protein.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) SLC26A4",
        bibliography: ["Pendred Syndrome Foundation. Pendred Syndrome. [2024]", "National Organization for Rare Disorders. Pendred Syndrome. [2024]"]
    },
    {
        name: "Peters plus syndrome",
        definition: "Congenital autosomal recessive glycosylation disorder causing ocular abnormalities, short stature, cleft lip, characteristic facial features, and intellectual disability. Caused by B3GALTL gene variants affecting glycosylation.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) B3GALTL",
        bibliography: ["Peters Plus Syndrome Foundation. Peters Plus Syndrome. [2024]", "National Organization for Rare Disorders. Peters Plus. [2024]"]
    },
    {
        name: "Phenylketonuria",
        definition: "Most common inborn error of amino acid metabolism characterized by mental disability, epilepsy, and behavioral problems in untreated patients. Caused by PAH gene variants affecting phenylalanine hydroxylase enzyme.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) PAH",
        bibliography: ["National PKU Alliance. Phenylketonuria. [2024]", "National Organization for Rare Disorders. PKU. [2024]"]
    },
    {
        name: "Pontocerebellar hypoplasia",
        definition: "Group of neurodegenerative pathologies affecting cerebellum and producing microcephaly. Ala307Ser variant in TSEN54 gene is most frequent cause of type 2 pontocerebellar hypoplasia.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) TSEN54",
        bibliography: ["Pontocerebellar Hypoplasia Foundation. PCH Information. [2024]", "National Organization for Rare Disorders. PCH. [2024]"]
    },
    {
        name: "Primary hyperoxaluria type 1 (PH1)",
        definition: "Pathology caused by defect in L-alanine:glyoxylate aminotransferase enzyme that transforms glyoxylate into oxalate. Caused by AGXT gene variants, leading to calcium oxalate crystal accumulation in kidneys.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) AGXT",
        bibliography: ["Oxalosis and Hyperoxaluria Foundation. PH1. [2024]", "National Organization for Rare Disorders. PH1. [2024]"]
    },
    {
        name: "Primary hyperoxaluria type 2 (PH2)",
        definition: "Rare genetic disorder of glyoxylate metabolism caused by deficiency in glyoxylate reductase/hydroxypyruvate reductase enzyme. Caused by GRHPR gene variants, less severe than PH1.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) GRHPR",
        bibliography: ["Oxalosis and Hyperoxaluria Foundation. PH2. [2024]", "National Organization for Rare Disorders. PH2. [2024]"]
    },
    {
        name: "Pyridoxine-dependent epilepsy",
        definition: "Rare autosomal recessive neurometabolic disease characterized by recurrent seizures resistant to antiepileptic drugs but responsive to pyridoxine (vitamin B6). Caused by ALDH7A1 gene variants affecting neurometabolic function.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) ALDH7A1",
        bibliography: ["Epilepsy Foundation. Pyridoxine-Dependent Epilepsy. [2024]", "National Organization for Rare Disorders. PDE. [2024]"]
    },
    {
        name: "Pyruvate kinase deficiency",
        definition: "Genetic blood disorder causing chronic nonspherocytic hemolytic anemia due to PK enzyme deficiency in glycolysis pathway. Caused by PKLR gene variants affecting red blood cell energy metabolism.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) PKLR",
        bibliography: ["Pyruvate Kinase Deficiency Foundation. PKD Information. [2024]", "National Organization for Rare Disorders. PKD. [2024]"]
    },
    {
        name: "Refsum disease",
        definition: "Autosomal recessive inborn error of metabolism characterized by defect in alpha-oxidation occurring in peroxisomes. Caused by PHYH gene variants affecting phytanoyl-CoA hydroxylase, leading to phytanic acid accumulation.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) PHYH",
        bibliography: ["Refsum Disease Foundation. Refsum Disease. [2024]", "National Organization for Rare Disorders. Refsum Disease. [2024]"]
    },
    {
        name: "Retinitis pigmentosa",
        definition: "Heterogeneous group of hereditary eye diseases causing progressive retinal degeneration and night blindness. Autosomal recessive non-syndromic RP presents with vision disorders and hearing loss affecting multiple genes.",
        variants: "13.5 million variants",
        loci: "3 loci",
        genes: "(3) FAM161A, PDE6B, USH2A",
        bibliography: ["Foundation Fighting Blindness. Retinitis Pigmentosa. [2024]", "National Eye Institute. RP. [2024]"]
    },
    {
        name: "Rhizomelic Chondrodysplasia Punctata Type 1",
        definition: "Most common RCDP accounting for 90% of patients, characterized by shortening of long bones, cataracts, periarticular calcifications, and psychomotor retardation. Caused by PEX7 gene variants affecting peroxisomal metabolism.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) PEX7",
        bibliography: ["RCDP Foundation. Rhizomelic Chondrodysplasia Punctata. [2024]", "National Organization for Rare Disorders. RCDP1. [2024]"]
    },
    {
        name: "Salla Disease",
        definition: "Lysosomal storage disorder characterized by abnormal accumulation of sialic acid causing neuronal and multisystem damage. Caused by SLC17A5 gene variants affecting sialin protein transport, most common in northern Finland.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) SLC17A5",
        bibliography: ["Salla Disease Foundation. Salla Disease. [2024]", "National Organization for Rare Disorders. Salla Disease. [2024]"]
    },
    {
        name: "Short chain acyl-CoA dehydrogenase deficiency (SCADD)",
        definition: "Autosomal recessive disorder of fatty acid beta-oxidation in mitochondria characterized by increased butyrylcarnitine and ethylmalonic acid levels. Caused by ACADS gene variants affecting acyl-CoA dehydrogenase enzyme.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) ACADS",
        bibliography: ["Fatty Oxidation Disorders Family Support Group. SCADD. [2024]", "National Organization for Rare Disorders. SCADD. [2024]"]
    },
    {
        name: "Sjögren-Larsson syndrome",
        definition: "Neurocutaneous disease characterized by congenital ichthyosis, intellectual disability, and spasticity. Caused by ALDH3A2 gene variants affecting fatty aldehyde dehydrogenase enzyme involved in lipid metabolism.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) ALDH3A2",
        bibliography: ["Sjögren-Larsson Syndrome Foundation. SLS Information. [2024]", "National Organization for Rare Disorders. SLS. [2024]"]
    },
    {
        name: "Tay-Sachs disease",
        definition: "Progressive neurodegenerative disease caused by defects in lysosomal enzyme hexosaminidase-A, encoded by HEXA gene. Results in GM2 ganglioside accumulation toxic to neurons, most common in Ashkenazi Jews.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) HEXA",
        bibliography: ["National Tay-Sachs and Allied Diseases Association. Tay-Sachs Disease. [2024]", "National Organization for Rare Disorders. Tay-Sachs. [2024]"]
    },
    {
        name: "Type 1 Oculocutaneous albinism (tyrosinase negative)",
        definition: "Autosomal recessive disease with total or partial absence of pigmentation in skin, hair, and eyes. Caused by TYR gene variants affecting tyrosinase enzyme involved in melanin synthesis.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) TYR",
        bibliography: ["National Organization for Albinism and Hypopigmentation. OCA Type 1. [2024]", "National Organization for Rare Disorders. OCA1. [2024]"]
    },
    {
        name: "Type 2 oculocutaneous albinism (tyrosinase positive)",
        definition: "Most common form of OCA worldwide characterized by variable reduction of pigmentation in skin, hair, and eyes. Caused by OCA2 gene variants affecting melanin production, most prevalent in African population.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) OCA2",
        bibliography: ["National Organization for Albinism and Hypopigmentation. OCA Type 2. [2024]", "National Organization for Rare Disorders. OCA2. [2024]"]
    },
    {
        name: "Tyrosinemia type I",
        definition: "Disease caused by defect in fumarylacetoacetase enzyme involved in tyrosine degradation. Caused by FAH gene variants, leading to toxic substance accumulation affecting liver and kidneys, most common in Quebec region.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) FAH",
        bibliography: ["Tyrosinemia Foundation. Type I Tyrosinemia. [2024]", "National Organization for Rare Disorders. HT1. [2024]"]
    },
    {
        name: "Usher syndrome",
        definition: "Most common autosomal recessive disorder resulting in combination of deafness and progressive vision loss. Classified into 3 clinical types caused by 10 different genes affecting sensorineural hearing and retinitis pigmentosa.",
        variants: "13.5 million variants",
        loci: "10 loci",
        genes: "(10) ADGRV1, CDH23, CLRN1, MYO7A, PCDH15, USH1C, USH2A",
        bibliography: ["Usher Syndrome Coalition. Usher Syndrome. [2024]", "National Institute on Deafness and Other Communication Disorders. Usher Syndrome. [2024]"]
    },
    {
        name: "Very long chain acyl-CoA dehydrogenase deficiency (VLCADD)",
        definition: "Disorder of mitochondrial oxidation of long-chain fatty acids with highly variable clinical manifestations. Caused by ACADVL gene variants affecting very long chain acyl-CoA dehydrogenase enzyme.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) ACADVL",
        bibliography: ["Fatty Oxidation Disorders Family Support Group. VLCADD. [2024]", "National Organization for Rare Disorders. VLCADD. [2024]"]
    },
    {
        name: "von Willebrand disease",
        definition: "Most common inherited bleeding disorder affecting 1 in 1,000 people, characterized by alteration in platelet adhesion and aggregation. Caused by VWF gene variants affecting von Willebrand factor glycoprotein essential for blood coagulation.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) VWF",
        bibliography: ["National Hemophilia Foundation. von Willebrand Disease. [2024]", "World Federation of Hemophilia. VWD. [2024]"]
    },
    {
        name: "Wilson disease",
        definition: "Autosomal recessive disorder affecting 1 in 100,000 people, characterized by abnormal copper accumulation in liver and brain. Caused by ATP7B gene variants affecting copper transport protein, leading to liver damage and neurological complications.",
        variants: "13.5 million variants",
        loci: "1 loci",
        genes: "(1) ATP7B",
        bibliography: ["Wilson Disease Association. Wilson Disease. [2024]", "National Organization for Rare Disorders. Wilson Disease. [2024]"]
    },
    {
        name: "Zellweger syndrome",
        definition: "Most severe variant of peroxisome biogenesis disorders characterized by neural defects, dysmorphic craniofacial features, neonatal seizures, and liver dysfunction. Caused by mutations in one of 13 PEX genes affecting peroxin proteins.",
        variants: "13.5 million variants",
        loci: "13 loci",
        genes: "(13) PEX1",
        bibliography: ["Zellweger Syndrome Foundation. Zellweger Syndrome. [2024]", "National Organization for Rare Disorders. Zellweger. [2024]"]
    }
];