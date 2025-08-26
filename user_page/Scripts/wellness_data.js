const wellnessData = [
    {
        name: "Antioxidant capacity",
        definition: "The body's antioxidant defense system, especially the enzymes glutathione peroxidase and catalase, are responsible for keeping the levels of reactive oxygen species (ROS) low to avoid a physiological state of oxidative stress. Reactive oxygen species (ROS) are by-products of normal cellular activity. They are produced in many cellular compartments and play an important role in signaling pathways. However, overproduction of ROS disrupts the body's antioxidant defense system and can lead to oxidative stress. This situation is associated with the development of several human diseases (such as cancer, cardiovascular, neurodegenerative and metabolic disorders), inflammation and aging. Antioxidant mechanisms protect cells against ROS-induced oxidative damage. The body's antioxidant defense system has been reported to consist of SOD (manganese superoxide dismutase), CAT (catalase), GST (glutathione S-transferase) and GSH (glutathione) activity. SOD catalyzes the breakdown of endogenous cytotoxic superoxide radicals into H2O2, which is degraded by CAT. Therefore, they play a crucial role in the maintenance of physiological O2 and H2O2 levels. On the other hand, GSH, together with GST, has a basic role in cellular defense against deleterious free radicals and other oxidative species. GST catalyzes the conjugation of the thiol group of glutathione to electrophilic substrates and thus detoxifies endogenous compounds such as peroxidized lipids. Its activity and ability to protect cells and tissues from ROS and their harmful products are influenced by polymorphisms in antioxidant genes.",
       
        genes: "(2) CAT, GPX1"
    },
    {
        name: "Apolipoprotein A1 levels",
        definition: "Apolipoprotein A1 or ApoA1 is a key protein in lipid metabolism, is the main protein component of high-density lipoproteins (HDL) or 'good cholesterol' and is involved in the transport of cholesterol from the tissues to the liver for excretion, among other processes. Apolipoprotein A1 is a relatively large protein, encoded by the APOA1 gene, which is the major component of HDL particles. ApoA1 is essential for the maintenance of lipid balance in the body and protection against atherosclerosis. Blood levels of apolipoprotein A1 are an important indicator of cardiovascular health along with apolipoprotein B or ApoB which is the most abundant protein in atherogenic particles such as low-density lipoprotein (LDL) particles usually called 'bad cholesterol'. The calculation of the ApoB/ApoA1 ratio can be helpful in estimating the risk of atherosclerosis and heart disease, among other parameters. There are multiple studies suggesting that low levels of apolipoprotein A1 are associated with an increased risk of cardiovascular disease, including heart disease and some forms of hereditary dyslipidemias, considered rare diseases, such as hereditary visceral amyloidosis and hypoalphalipoproteinemia-2. Plasma ApoA1 levels can be influenced by a variety of both genetic and other factors (dietary, lifestyle, medical conditions and treatments, hormonal factors, etc.).",
        variants: "13.5 million variants",
        loci: "396 loci",
        genes: "(446) ABCA1, ABCA8, ABO, ACOXL, ADAM10, etc."
    },

    {
        name: "Apolipoprotein B levels",
        definition: "Apolipoprotein B or ApoB is a key protein in maintaining the structure of low-density lipoprotein (LDL) or 'bad cholesterol' particles and other larger lipid particles that carry cholesterol esters and triglycerides in varying amounts and proportions through the bloodstream. ApoB is the most abundant protein in atherogenic particles. The Apo-B100 isoform is part of the low-density particles that include very low density (VLDL), intermediate density (IDL), low density (LDL) and lipoprotein a or Lp(a) particles, while the Apo-B48 isoform is present in the larger particles known as chylomicrons. The number of ApoB particles that enter and become trapped in the arterial wall is determined primarily by the number of ApoB particles found in the arterial lumen. ApoB-containing particles that are smaller and poorer in cholesterol (such as LDL particles) have a greater tendency to become trapped than larger VLDL-type ApoB particles. Once retained in the artery wall, all ApoB particles are equally atherogenic. As the cholesterol content varies between different ApoB particles, triglyceride and cholesterol levels are not always accurate measures for estimating the number of ApoB particles. ApoB levels may be a more accurate indicator of atherogenic risk or likelihood of lipid accumulation in the artery wall. Multiple genetic and non-genetic factors can influence ApoB levels, including diet, lifestyle, medical conditions, medications, and hormonal factors.",
        variants: "13.5 million variants",
        loci: "215 loci",
        genes: "(240) AARS1, ABCA10, ABCA8, ABCB4, ABCG5, etc."
    },
    {
        name: "Bitter taste perception",
        definition: "Sensitivity to bitter taste plays an important role in regulating the intake of some toxic substances in food. Taste is determined primarily by chemical sensations detected by taste (tongue) and smell (odor). The main structure housing sensory endings are the papillae of the tongue, which can distinguish sweet, bitter, sour, salty and umami. Sour and salty substances are linked to ion channels, while sweet, bitter and umami tastes are transmitted through G-protein-linked receptors encoded by the TAS2R gene family. Bitterness has the characteristic taste of gall, quinine and other alkaloids, producing an unpleasant and long-lasting sensation. The perception of bitterness is a defense mechanism against potentially toxic substances. Although no direct relationship between bitterness and food toxicity has been established, many common bittering agents, such as strychnine and nicotine, are toxic. The sensation of bitterness arises when certain chemicals contact specialized receptors on the tongue. This perception varies among individuals due to genetic differences, influencing food preferences and consumption.",
        variants: "—",
        loci: "—",
        genes: "(1) TAS2R38"
    },
    {
        name: "Blood glucose",
        definition: "Glucose is the main sugar found in the blood and the primary energy source for all cells. Blood glucose levels are tightly regulated, varying between 70 and 145 mg/dL throughout the day, being lower on an empty stomach and higher after meals. Prolonged elevated fasting glucose is linked to diabetes, where insulin function is impaired, leading to excess blood sugar. Initially, lifestyle changes can help control pre-diabetes, but chronic high glucose can cause complications such as cardiovascular disease, hearing loss, vision loss, and kidney disease. While lifestyle is the main factor, genetic variants also contribute to differences in blood glucose regulation within the normal range.",
        variants: "13.5 million variants",
        loci: "69 loci",
        genes: "(73) ABCB10, ABITRAM, ABO, ACSL1, ADCY5, etc."
    },
    {
        name: "Body fat percentage",
        definition: "Body fat percentage is a key health indicator that measures fat mass relative to total body weight, offering a more accurate assessment than BMI. Fat serves as an energy reserve, protects organs, regulates hormones, and helps maintain temperature. Too much body fat increases the risk of chronic diseases like type 2 diabetes, cardiovascular disease, hypertension, and cancer. Influencing factors include diet, exercise, age, sex, and hormones, with genetics playing a significant role in fat storage, distribution, and metabolic response. Maintaining a healthy body fat percentage involves balanced nutrition, regular activity, and addressing hormonal imbalances.",
        variants: "13.5 million variants",
        loci: "453 loci",
        genes: "(590) ABHD17C, ACAP2, ACO1, ACOT12, ACVR2A, etc."
    },
    {
        name: "Body mass index",
        definition: "Body mass index (BMI) is the weight-to-height ratio (kg/m²) used to classify underweight, normal weight, overweight, and obesity. While simple and widely used, BMI does not differentiate between fat and lean mass, and may overestimate or underestimate adiposity in certain cases. Globally, 39% of adults are overweight or obese, conditions associated with higher risk of metabolic diseases, including type 2 diabetes, hypertension, stroke, and certain cancers, especially with abdominal fat accumulation. BMI is influenced by genetic and environmental factors, and its health impact depends on fat distribution and overall body composition.",
        variants: "13.5 million variants",
        loci: "656 loci",
        genes: "(940) ABCG2, ABHD17C, ACO1, ACOT12, ACVR2, etc."
    },
    {
        name: "Bone mineral density",
        definition: "Bone mineral density (BMD) measures the mineral content in bones, mainly calcium and phosphorus, reflecting bone strength. Bone mass increases until around age 30, after which it may decline, particularly after menopause in women, leading to osteoporosis risk. Non-genetic factors such as smoking, alcohol, sedentary lifestyle, poor diet, certain medications, and medical conditions (arthritis, kidney disease, hyperparathyroidism, liver disease, celiac disease) can reduce BMD. Preventive strategies include adequate calcium and vitamin D intake, physical activity, and avoiding tobacco and alcohol.",
        variants: "13.5 million variants",
        loci: "76 loci",
        genes: "(64) ADAMTS5, AKAP11, AQP1, ARHGAP25, ATP2B1, etc."
    },
    {
        name: "Caffeine and anxiety",
        definition: "Caffeine is one of the most popular and widely consumed psychostimulant substances. The main source of caffeine is coffee, which has spread worldwide thanks to its taste and both stimulant and antioxidant properties. However, it can also produce unwanted effects that depend on various factors such as age, sex, state of health, and genetics. Caffeine occurs naturally in the leaves, seeds, and fruits of more than 60 plants (such as tea leaves, kola nuts, coffee and cocoa beans) and can also be synthesized artificially for foods and medicines. At low doses, caffeine produces mild euphoria, alertness, and enhanced cognitive performance, but at high doses it can cause nausea, anxiety, jitteriness, and nervousness. Regular consumers often develop tolerance, yet some individuals remain more sensitive to caffeine-induced anxiety or insomnia, leading them to reduce or avoid intake. Variability in response is partly explained by genetic differences affecting caffeine metabolism and anxiety sensitivity.",
        variants: "—",
        loci: "—",
        genes: "(1) ADORA2A"
    },
    {
        name: "Caffeine and sports performance",
        definition: "Caffeine acts on the central nervous system, peripheral nervous system, and skeletal muscle, potentially improving sports performance. Consumed by about 80% of the world's population, caffeine is found in over 60 plant species, primarily coffee beans and tea leaves. It is also present in some drugs, supplements, and energy drinks. After rapid intestinal absorption, caffeine is metabolized in the liver into paraxanthine, theophylline, and theobromine. These compounds, along with caffeine itself, can enhance performance by decreasing glycogen use, increasing free fatty acid mobilization, antagonizing adenosine receptors, and increasing dopamine availability for improved alertness and motivation. Caffeine also has analgesic and anti-inflammatory effects, aiding recovery. Individual responses vary depending on training level, caffeine tolerance, and genetics.",
        variants: "—",
        loci: "—",
        genes: "(1) CYP1A2"
    },
    {
        name: "Caffeine dependence after prolonged consumption",
        definition: "Caffeine is the most widely consumed psychostimulant in the world, found in coffee, tea, and many foods. First isolated in 1819, its global use has steadily increased. It acts as a central nervous system stimulant, improving alertness and reducing drowsiness. Beyond stimulation, moderate caffeine intake may provide antioxidant effects, mild diuresis, neuroprotection in neurodegenerative diseases (e.g., Parkinson's, Alzheimer's), headache relief via vasoconstriction, and enhanced sports performance. However, excessive intake (>400 mg/day) can cause restlessness, tremors, insomnia, headache, tachycardia, anxiety, and dependence. Sensitivity varies: pregnant women metabolize caffeine more slowly, while smokers metabolize it faster.",
        variants: "13.5 million variants",
        loci: "28 loci",
        genes: "(36) ABCG2, ADCY2, ADORA2A, AAHRA, TXN2, etc."
    },
    {
        name: "Calcium levels",
        definition: "Calcium is the most abundant mineral in the body, accounting for about 2% of body weight, with 99% stored in bones and teeth. It is essential for skeletal development and numerous cellular functions. Skeletal functions include bone and tooth formation, while regulatory functions involve maintaining cell structure, enzyme regulation, neurotransmitter release, muscle contraction, and metabolic control. Calcium levels are tightly regulated by parathyroid hormone, vitamin D, and calcitonin. Dietary intake is required, with dairy products as the main source, followed by leafy greens, fruits, and legumes. Deficiency or imbalance can lead to osteoporosis, neurological problems, cardiomyopathies, and other disorders.",
        variants: "13.5 million variants",
        loci: "314 loci",
        genes: "(289) A1CF, ABCA9, ABCB9, ABCC12, ABCC6, etc"
    },
    {
        name: "Celiac disease predisposition",
        definition: "Celiac disease is an autoimmune disorder affecting genetically predisposed individuals, where gluten ingestion (from wheat, barley, rye) damages the small intestine's villi, impairing nutrient absorption. Affecting ~1% of the population, prevalence varies geographically (e.g., 2% in Finland, 0.3% in Germany) and is higher in women (2:1 ratio). Onset can occur at any age. In children, diarrhea and malabsorption predominate; in adults, anemia and vague chronic symptoms are common. Gluten peptides like gliadin trigger inflammation in susceptible individuals, leading to villous atrophy and nutrient malabsorption.",
        variants: "—",
        loci: "—",
        genes: "(1) HLA-DQA1"
    },
    {
        name: "Creatinine levels",
        definition: "Creatinine is an organic compound produced from creatine metabolism in muscle, generated at a constant rate and excreted in urine. Creatine is synthesized in the liver, pancreas, and kidneys, and stored in muscle as an energy source. When metabolized, creatinine enters the bloodstream and is filtered by the kidneys. Because creatinine is not protein-bound, it is freely filtered at the glomerulus, making serum creatinine a standard marker of kidney function. Elevated levels suggest impaired renal clearance, though values are also influenced by muscle mass, diet, age, and activity. Creatinine can also estimate muscle mass and predict outcomes in various clinical contexts.",
        variants: "13.5 million variants",
        loci: "628 loci",
        genes: "(644) A1CF, ABCC1, ABCC2, ABHD3, ABI2, etc."
    },
    {
        name: "Diastolic blood pressure levels",
        definition: "Diastolic blood pressure (DBP) is the pressure in the arteries between heartbeats, normally below 80 mmHg. Values ≤60 mmHg may indicate hypotension, causing dizziness, fainting, and fatigue. DBP ≥90 mmHg is considered hypertension, a major cardiovascular risk factor often without symptoms, though severe cases can cause headache, chest pain, confusion, and vision changes. Risk factors include age, family history, inactivity, high-salt or high-fat diets, alcohol and tobacco use, certain medications, and ethnicity. Regular monitoring, healthy diet, exercise, and lifestyle changes can help maintain healthy DBP and reduce cardiovascular disease risk.",
        variants: "13.5 million variants",
        loci: "323 loci",
        genes: "(271) AAMDC, ABCC10, ACBD4, ADAMTS3, ADAMTS8, etc."
    },
    {
        name: "Exercise-induced muscle damage (initial phase)",
        definition: "The presence of certain genetic variants could explain why some people are less likely to be injured than others, as well as having an easier time recovering from prolonged and strenuous exercise. Exercise can produce muscle damage through two types of alterations: early-onset mechanical damage and a subsequent inflammatory response. Eccentric exercise, in which muscles are stretched while contracting (e.g., squats), is a common model and is effective for improving muscle strength, coordination, and performance. However, it is also associated with muscle damage and soreness. Older individuals, especially those with a genetic predisposition, may be more susceptible to such damage and to injuries of muscles and tendons.",
       
        genes: "(2) ACTN3, MYLK2"
    },
    {
        name: "Exercise-induced muscle damage (regeneration capacity)",
        definition: "Variants in genes related to the activation of muscle stem cells (satellite cells) are relevant to understanding why some people require more time to recover from muscle injury. Muscle damage occurs in three phases: mechanical damage, inflammation, and regeneration. During the regeneration phase, satellite cells are activated by signals from the inflammatory stage and work to repair or replace damaged fibers, restoring muscle function. Differences in this regenerative capacity may influence recovery speed and injury risk.",
      
        genes: "(2) SLC30A8, SOD2"
    },
    {
        name: "Exercise-induced muscle damage (second phase)",
        definition: "In the second phase of muscle damage, an inflammatory response occurs, influenced by genetic variants that can increase or reduce damage severity. After mechanical damage, immune cells are recruited to the site (chemotaxis), and cytokines such as IL1B, IL6, and TNF are released to amplify inflammation. Variations in the genes coding for these cytokines can influence the intensity of this inflammatory phase and the recovery period needed after strenuous exercise.",
       
        genes: "(3) IL1B, IL6, TNF"
    },
    {
        name: "Farmer-hunter profile",
        definition: "Throughout human evolution, genetic variants have shaped differences in nutrient metabolism. The CLTCL1 gene, which codes for clathrin CHC22, affects how efficiently glucose is retained in muscle and fat cells. Two metabolic profiles are recognized: the 'farmer' profile, more efficient at processing carbohydrate-rich diets, and the 'hunter-gatherer' profile, less efficient at carbohydrate metabolism and more predisposed to insulin resistance. These profiles reflect adaptations to different ancestral diets.",
        variants: "—",
        loci: "—",
        genes: "(1) CLTCL1"
    },
    {
        name: "Food intake control",
        definition: "Body weight and fat distribution are regulated by a complex network of hormones, neuropeptides, and neurotransmitters that influence appetite, satiety, and the reward response to food. Variants in genes affecting these pathways may explain why some people have a greater tendency to overeat high-calorie foods or snack between meals, increasing their predisposition to fat accumulation, overweight, and obesity.",
       
        genes: "(5) ANKK1, FTOM, LEPR, MC4R, NPY"
    },
    {
        name: "Galectin-3 levels",
        definition: "Galectin-3 is a carbohydrate-binding protein involved in immunity, apoptosis, cell adhesion, and tissue remodeling. It is an important biomarker for cardiovascular disease, fibrosis, cancer, and chronic inflammation. Levels of galectin-3 can be influenced by genetic and environmental factors such as inflammation, tissue damage, diet, exercise, alcohol consumption, oxidative stress, and exposure to toxins. Understanding these influences could help in disease prevention and therapy development.",
        variants: "13.5 million variants",
        loci: "18 loci",
        genes: "(13) ATG14, DLGAP5, FUT6, GCH1, GIMAP7, etc."
    },
    {
        name: "Genetic predisposition to peanut allergy",
        definition: "Peanut allergy is a common and potentially severe food allergy that often begins in childhood and may persist into adulthood. It is influenced by both genetic and environmental factors, with family history significantly increasing risk. Symptoms range from mild (itchy mouth, hives) to severe (anaphylaxis) and typically occur within minutes to hours after exposure. Differences in immune system genes may explain individual susceptibility.",
        variants: "—",
        loci: "—",
        genes: "(2) HLA-DRA, LOC100507686"
    },
    {
        name: "Glycated hemoglobin levels",
        definition: "Glycated hemoglobin (HbA1c) forms when glucose binds to hemoglobin in red blood cells. It reflects average blood glucose over 2–3 months and is used to diagnose and monitor diabetes and prediabetes. Higher HbA1c indicates poorer blood sugar control. Genetic factors, along with age, ethnicity, and lifestyle, can influence HbA1c levels and the risk of developing type 2 diabetes.",
        variants: "13.5 million variants",
        loci: "168 loci",
        genes: "(173) A4GALT, ABCC1, ABCG4, ABO, ADCY5, etc."
    },
    {
        name: "HDL cholesterol levels",
        definition: "HDL cholesterol is a high-density lipoprotein, commonly known as 'good cholesterol' because it is responsible for the storage and excretion of cholesterol, which has been linked to a lower risk of heart attack or stroke. HDL cholesterol (high density lipoprotein) is a lipoprotein of the chylomicron group whose functions are to transport lipids such as phospholipids, triglycerides or cholesterol. It differs from other lipoproteins such as LDL by its higher density, due to having a greater amount of proteins in its composition. The main function of HDL is the transport of cholesterol from peripheral tissues to the liver, playing a role in lipid biodistribution. It is commonly known as 'good cholesterol' due to its anti-atherogenic and anti-inflammatory properties, thanks to its uptake and return to the liver of cholesterol stored in the foam cells of atherosclerotic plaques. It thus reduces plaque size and its associated inflammation, reducing the risk of atherosclerosis, a precursor of myocardial infarction, transient ischemic attack and stroke. It is well established that elevated HDL levels (>40 mg/dL) are associated with a lower risk of coronary heart disease and are thought to play a role in predicting cardiovascular risk. HDL cholesterol levels can vary for different reasons. Genetic factor is among the factors influencing the levels of this lipoprotein. Compared to genetically determined abnormalities of HDL metabolism, low HDL-C levels occur much more frequently in patients with metabolic syndrome or diabetes mellitus. Low HDL-C levels are also associated with systemic inflammation, e.g., smoking, chronic inflammatory diseases or chronic kidney disease. In cases of extremely low HDL-C, a rare diagnosis, e.g., neoplasia or an increased risk of sepsis, may be considered. Some established HDL cholesterol levels based on their relationship to cardiovascular disease risk are mentioned below: Less than 40 mg/dL in men = low HDL (increased risk). Less than 50 mg/dL in women = low HDL (higher risk). 40 to 59 mg/dL = Higher is better. 60 mg/dL and above = high HDL (lower risk).",
        variants: "13.5 million variants",
        loci: "143 loci",
        genes: "(102) ABCA1, ABCA8, ACAA2, ADAM10, ADH5, etc."
    },
    {
        name: "Histamine intolerance",
        definition: "Histaminosis or excess histamine in the blood occurs when there is a high intake of histamine in our diet or when it is not metabolized and eliminated correctly. Histamine is a substance involved in numerous biological and physiological processes. It is synthesized and stored in granules inside certain blood cells that are part of the immune system and is also present in many foods, either naturally or as a result of the action of microorganisms. At the physiological level, histamine is involved in the stimulation of gastric juice secretion, inflammation, neurotransmission, smooth muscle contraction, among other processes. When there is a deficit in the DAO enzyme at intestinal level, histamine is not eliminated correctly and is absorbed in the intestine through which when it reaches the blood it can accumulate in different tissues producing symptoms, which are reversible and transitory, similar to an allergic reaction, such as headache, urticaria, diarrhea and constipation.",
        genes: "(1) AOC1"
    },
    {
        name: "Intraocular pressure",
        definition: "Intraocular pressure (IOP) is the measure of the fluid pressure inside the eye and plays an essential role in maintaining the shape and function of the eyeball. Variations in IOP are linked to eye diseases such as glaucoma, retinal detachment and uveitis. Ocular pressure, known as intraocular pressure, refers to the pressure of the fluid inside the eye. The eye contains two fluids, the vitreous humor in the posterior chamber and the aqueous humor in the anterior chamber. IOP is primarily determined by the balance between the production and drainage of aqueous humor. The standard IOP measurement is in millimeters of mercury (mmHg), and normal values are between 10 and 20 mmHg. Having abnormally high or low eye pressure can be detrimental to vision. Ocular hypertension is the elevation of IOP without additional symptoms, and may cause no harm in some individuals, while others may suffer vision loss even with apparently normal IOP. Glaucoma is a disease in which chronic high IOP can damage the optic nerve and cause permanent vision loss, if not properly treated. IOP is the only modifiable risk factor for glaucoma. Non-genetic factors linked to IOP include type 2 diabetes, blood pressure, BMI, myopia, age, family history, ethnicity, steroid use, and past eye injury or surgery. Prevention includes regular eye exams, avoiding smoking, using sunglasses, eating leafy greens and omega-3 rich fish, exercising, and controlling blood pressure, cholesterol, and blood sugar.",
        variants: "13.5 million variants",
        loci: "158 loci",
        genes: "(144) ABCA1, ABO, ADAMTS17, ADAMTS18, ADAMTS19, etc."
    },
    {
        name: "Lactose intolerance",
        definition: "Lactose is the main carbohydrate in milk. Mammalian offspring can digest it thanks to lactase, which breaks it down into glucose and galactose. Some people retain this ability into adulthood, while others develop lactose intolerance. Lactose intolerance is one of the most common food intolerances and occurs when lactase activity in the small intestine epithelium decreases, leading to pathological reactions to milk sugar. It is different from cow's milk allergy, which involves the immune system. Symptoms vary and can appear immediately or hours after consuming lactose-containing foods, and include stomach pain, nausea, diarrhea, and gas.",
        genes: "(1) MCM6"
    },
    {
        name: "LDL cholesterol levels",
        definition: "LDL cholesterol, often called 'bad cholesterol', is a low-density lipoprotein that transports cholesterol to cells. It makes up about 60–70% of total serum cholesterol. High LDL levels (hypercholesterolemia) increase the risk of atherosclerotic cardiovascular disease. LDL accumulation in arterial walls leads to oxidation, triggering inflammation, promoting clot formation, increasing vasoconstriction, and reducing vasodilation. This process increases the risk of heart disease and stroke.",
        variants: "13.5 million variants",
        loci: "121 loci",
        genes: "(84) ABCA1, ABCA6, ABCG5, ABO, ANGPTL3, ANXA9, etc."
    },
    {
        name: "Levels of vitamin A (beta carotene)",
        definition: "Vitamin A is a group of fat-soluble compounds including retinol, retinyl palmitate, and beta-carotene, essential for vision, cell differentiation, epithelial health, and immune function. It is obtained from diet as preformed vitamin A (animal sources) or provitamin A carotenoids (plant sources). Carotenoids act as antioxidants, protecting against ROS and possibly reducing the risk of cardiovascular disease, diabetes, fatty liver disease, and some cancers. Deficiency causes epithelial keratinization in eyes, glands, and mucosa; toxicity can occur from excessive intake. The WHO estimates millions of deficiency cases annually, but vitamin A toxicity is rare. Genetic variants may affect beta-carotene absorption and conversion efficiency.",
        genes: "(1) BCMO1"
    },
    {
        name: "Long-chain omega fatty acids levels",
        definition: "Long-chain polyunsaturated fatty acids (LC-PUFAs) have ≥20 carbons and ≥2 double bonds. The main types are omega-3 and omega-6, which cannot be synthesized by humans and must come from the diet. Key omega-3s include α-linolenic acid (ALA), eicosapentaenoic acid (EPA), and docosahexaenoic acid (DHA). They regulate cell membranes, inflammation, blood pressure, clotting, and glucose tolerance. Omega-3s have anti-inflammatory activity, while omega-6s tend to be pro-inflammatory. Modern Western diets are often high in omega-6 and low in omega-3, which can negatively impact health.",
        genes: "(1) FADS1"
    },
    {
        name: "Lung function (exhaled air volume)",
        definition: "Lung function reflects the health of airways and lungs and is critical in diagnosing and monitoring respiratory diseases like COPD. Spirometry is the standard test, measuring forced vital capacity (FVC), forced expiratory volume in one second (FEV1), and the FEV1/FVC ratio. Normal values: FVC ≥ 80%, FEV1 ≥ 80%, FEV1/FVC ≥ 70%. These values help detect obstructive or restrictive defects. Genetic factors influence FVC, but smoking, obesity, diabetes, and chronic symptoms also affect lung function. Preventive measures include a healthy diet, exercise, and avoiding smoking.",
        variants: "13.5 million variants",
        loci: "329 loci",
        genes: "(432) ACAN, ADAMTS10, ADAMTS17, ADAMTS8, ADAMTSL3, etc."
    },
    {
        name: "Muscle endurance",
        definition: "Muscle endurance is the ability of muscles to sustain repeated contractions against resistance. Genetics influences fiber type distribution—type I (slow-twitch) for endurance, type II (fast-twitch) for power. Sprinters and power athletes tend to have more fast fibers, while endurance athletes have more slow fibers. Strength, muscle size, training, and diet also affect endurance. Glycogen storage capacity plays a role in sustaining muscle activity.",
        genes: "(1) ACTN3"
    },
    {
        name: "Myoadenylate deaminase (AMPD1 gene)",
        definition: "Myoadenylate deaminase deficiency (MAD) is a metabolic myopathy caused by AMPD1 gene variants, most often c.34C>T. It is inherited in an autosomal recessive manner with incomplete penetrance. MAD affects purine nucleotide metabolism by impairing conversion of AMP to IMP and ammonia in skeletal muscles. Symptoms include post-exercise muscle pain and reduced exercise tolerance, though many people remain asymptomatic. Some evidence links MAD to reduced athletic performance or cardioprotective effects in heart failure.",
        genes: "(1) AMPD1"
    },
    {
        name: "Prediction of visceral adipose tissue",
        definition: "Visceral adipose tissue is the fat stored around internal organs. Its increase has been linked as a risk factor for cardiovascular diseases, such as heart attack and atherosclerosis, and metabolic diseases. Adipose tissue or fat tissue is made up of cells capable of accumulating fat, the adipocytes. This tissue has various functions such as metabolic, cushioning, protecting and holding in place internal organs and other structures of the body. In the human body, adipose tissue is located under the skin (subcutaneous fat), around the organs (visceral fat), in the bone marrow (yellow bone marrow) and in the breasts. Specifically, visceral fat functions as a lipid reserve and provides protection. In general, men tend to have a higher rate of visceral fat due to male hormones, while women accumulate subcutaneous fat in the buttocks, hips and limbs due to oestrogen. After menopause, women start to accumulate more fat in the abdomen. Visceral fat is located in the abdominal cavity and its excess has been directly related to an increased risk of type 2 diabetes, insulin resistance, inflammatory diseases and other obesity-related diseases. Why abdominal fat is more harmful than other fat deposits, such as subcutaneous adipose tissue, has not been fully elucidated. Possible hypotheses point to a greater lipolytic capacity and its resistance to the antilipolytic effects of insulin, resulting in higher concentrations of circulating fatty acids. In addition, studies also point to visceral fat having a higher rate of macrophage infiltration, resulting in a proinflammatory profile that promotes insulin resistance.",
        variants: "13.5 million variants",
        loci: "198 loci",
        genes: "(255) ABHD17C, ACOT12, ACVR2A, DARB1, ADCY3, etc."
    },
    {
        name: "Preference for sweets",
        definition: "Sweet is one of the five basic tastes, universally considered pleasurable. It is detected mainly in taste buds at the tip of the tongue. Sweet molecules in nature include sugars found mainly in plants (fructose, sucrose, glucose) and lactose in milk, all providing energy and sweetness. This preference may have evolved to help identify energy-rich foods. Factors influencing sweet preference are complex, including age, diet, hormones, body weight, genetics, weight loss, sensory input, personality, ethnicity, lifestyle, exposure history, and disease. Artificial sweeteners mimic natural sweet taste but without the caloric content. Understanding why some people have a greater preference for sweets can help in managing conditions like diabetes and obesity.",
        genes: "(1) SLC2A2"
    },
    {
        name: "Serum phosphate levels",
        definition: "Serum phosphate is an essential mineral involved in bone and tooth formation, energy generation, and nerve and muscle function. It makes up about 1% of body weight, with most stored in bones and teeth alongside calcium. Levels are higher in children and tend to decrease with age. Serum phosphate is regulated by the kidneys, intestines, and hormones like parathyroid hormone and vitamin D. Abnormal levels have clinical implications: hyperphosphatemia (high levels) may result from chronic kidney disease, hypoparathyroidism, acidosis, or certain drugs; hypophosphatemia (low levels) can result from hyperparathyroidism, vitamin D deficiency, malabsorption, or medication effects.",
        variants: "13.5 million variants",
        loci: "268 loci",
        genes: "(232) ABCB9, ABCC6, ADAM23, ADGRD1, AFAP1, etc."
    },
    {
        name: "Systolic blood pressure levels",
        definition: "Systolic blood pressure (SBP) measures the pressure in arteries when the heart contracts. Normal SBP is below 120 mmHg; hypotension is SBP ≤ 90 mmHg, potentially causing dizziness, blurred vision, or fainting; hypertension is SBP ≥ 130 mmHg, a risk factor for cardiovascular disease, often without symptoms. Factors affecting BP include age, family history, inactivity, diet high in salt and saturated fats, alcohol, tobacco, certain medications, and ethnicity. Healthy habits—balanced diet, exercise, moderation in alcohol and tobacco—help maintain normal BP.",
        variants: "13.5 million variants",
        loci: "125 loci",
        genes: "(108) AKAP11, APOLD1, APPL2, AQP1, ARHGAP29, etc."
    },
    {
        name: "Tendinopathies in lower extremities (legs)",
        definition: "Tendinopathy risk in the legs is influenced by both environmental and genetic factors, including genes regulating bones, cartilage, and tendons. Tendons connect muscle to bone, transmitting force for movement, and are composed mostly of collagen, water, and a small amount of elastin. Common leg tendon issues include Achilles tendinopathy (largest tendon in body, involved in plantar flexion), quadriceps tendon injury (stabilizes hip/knee), and cruciate ligament rupture (provides knee stability). Risk factors include overuse, trauma, vascular disease, genetic predisposition, and rheumatologic conditions.",
        genes: "(7) ADAMTS14, COL1A1, COL5A1, GDF5, MMP3, TIMP2, TNC"
    },
    {
        name: "Tendinopathies in upper extremities (arms)",
        definition: "Tendons in the arms, particularly those of the rotator cuff (supraspinatus, subscapularis, teres minor, infraspinatus), are susceptible to injury due to degeneration, trauma, or overload. The supraspinatus tendon is most frequently injured, often due to poor vascularization or repetitive use. Genetic variations can influence susceptibility, recovery potential, and treatment response in tendinopathy cases.",
        genes: "(3) COL1A1, DEFB1, TNC"
    },
    {
        name: "Urate levels",
        definition: "Urate is the end product of purine metabolism, important for health but harmful in excess. High urate levels can cause gout, kidney disease, and cardiovascular issues, while low levels may be linked to neurodegenerative diseases due to urate's antioxidant role. Levels depend on diet (purine-rich foods), metabolism, kidney function, and hydration. Foods like red meat, seafood, and certain alcohols increase urate; adequate hydration and balanced diet help maintain healthy levels.",
        variants: "13.5 million variants",
        loci: "241 loci",
        genes: "(245) A1CFAAK1, ABCA1, ABCG2, ACVR2, AADGRL2, etc."
    },
    {
        name: "Vitamin B12 levels",
        definition: "Vitamin B12 (cobalamin) is a water-soluble vitamin obtained primarily from animal products such as red meat, dairy, and eggs. It exists in several forms (cyano-, methyl-, deoxyadenosyl-, and hydroxycobalamin) and functions as a cofactor in DNA synthesis, fatty acid metabolism, and myelin formation. B12 deficiency can cause hematological and neurological symptoms and may result from autoimmune causes (e.g., pernicious anemia), malabsorption (e.g., gastric bypass, Crohn's disease, celiac disease, Diphyllobothrium latum infection), or dietary insufficiency. B12 is transported in the blood bound mainly to haptocorrin and transcobalamins, with most circulating B12 not bioavailable. Liver stores can last for years but become depleted without absorption. Functional deficiency is often assessed via methylmalonic acid (MMA) and homocysteine levels.",
       
        genes: "(7) CLYBL, FUT2, FUT6, MMUT, MTHFR, TCN1, TCN2"
    },
    {
        name: "Vitamin C levels",
        definition: "Vitamin C (ascorbic acid) is a water-soluble vitamin, antioxidant, and cofactor in collagen biosynthesis, carnitine and catecholamine metabolism, and dietary iron absorption. Humans cannot synthesize vitamin C, obtaining it from fruits and vegetables such as citrus, berries, tomatoes, potatoes, and leafy greens. It stabilizes vitamin E and folic acid, neutralizes free radicals, and supports immune function. Deficiency causes scurvy, characterized by hemorrhage, hyperkeratosis, and anemia. Risk factors for deficiency include inadequate intake (e.g., elderly, alcohol use disorder, restrictive diets) or increased needs (e.g., chronic illness).",
        variants: "13.5 million variants",
        loci: "11 loci",
        genes: "(12) AKT1, CHPT1, FADS2, GSTA1, GSTA5, etc."
    },
    {
        name: "Vitamin D levels",
        definition: "Vitamin D is a fat-soluble nutrient that regulates calcium and phosphate homeostasis, supporting bone and tooth health. It is synthesized in the skin from 7-dehydrocholesterol under UVB light to form vitamin D3 (cholecalciferol), which is biologically inactive and must be converted in the liver to calcidiol and in the kidney to calcitriol, the active form. Vitamin D also plays roles in immune, endocrine, and neuromuscular systems, with possible benefits in autoimmune diseases. Sources include skin synthesis and dietary intake (fatty fish, fish liver oil, fortified foods). Factors such as latitude, age, and skin pigmentation can limit synthesis.",
        variants: "13.5 million variants",
        loci: "39 loci",
        genes: "(38) ADAMTS3, ADH1B, ALDH1A2, APOA5, APOB, etc."
    },
    {
        name: "Vitamin E levels",
        definition: "Vitamin E refers to eight fat-soluble compounds (four tocopherols and four tocotrienols) with antioxidant properties that protect cell membranes, reduce oxidative stress, and support immune function. Alpha-tocopherol is the most abundant form in humans. Vitamin E is obtained from plant-based foods and requires lipid absorption mechanisms for uptake. Deficiency is rare in developed countries but can occur with fat malabsorption disorders, liver disease, biliary obstruction, or certain genetic conditions such as abetalipoproteinemia. Adequate vitamin E is essential for skeletal muscle integrity and overall cellular protection.",
        
        genes: "(5) CD36, CYP4F2, SCARB1, TTPA, ZPR1"
    }
];