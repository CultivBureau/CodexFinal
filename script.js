// Set the workerSrc for pdf.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// --- DATA DEFINITIONS ---
const wellnessTestNames = [
    "Antioxidant capacity",
    "Apolipoprotein A1 levels",
    "Apolipoprotein B levels",
    "Bitter taste perception",
    "Blood glucose",
    "Body fat percentage",
    "Body mass index",
    "Bone mineral density",
    "Caffeine and anxiety",
    "Caffeine and sports performance",
    "Caffeine dependence after prolonged consumption",
    "Calcium levels",
    "Celiac disease predisposition",
    "Creatinine levels",
    "Diastolic blood pressure levels",
    "Exercise-induced muscle damage (initial phase)",
    "Exercise-induced muscle damage (regeneration capacity)",
    "Exercise-induced muscle damage (second phase)",
    "Farmer-hunter profile",
    "Food intake control",
    "Galectin-3 levels",
    "Genetic predisposition to peanut allergy",
    "Glycated hemoglobin levels",
    "HDL cholesterol levels",
    "Histamine intolerance",
    "Intraocular pressure",
    "Lactose intolerance",
    "LDL cholesterol levels",
    "Levels of vitamin A (beta carotene)",
    "Long-chain omega fatty acids levels",
    "Lung function (exhaled air volume)",
    "Muscle endurance",
    "Myoadenylate deaminase (AMPD1 gene)",
    "Prediction of visceral adipose tissue",
    "Preference for sweets",
    "Serum phosphate levels",
    "Systolic blood pressure levels",
    "Tendinopathies in lower extremities (legs)",
    "Tendinopathies in upper extremities (arms)",
    "Urate levels",
    "Vitamin B12 levels",
    "Vitamin C levels",
    "Vitamin D levels",
    "Vitamin E levels"
];

const traitsTestNames = [
    "Acne vulgaris",
    "Alanine aminotransferase levels",
    "Alcohol flush reaction",
    "Alkaline phosphatase levels",
    "Asparagus odor detection",
    "Aspartate aminotransferase levels",
    "Basal metabolic rate",
    "Bilirubin levels",
    "Birth weight",
    "Blood coagulation, factor V Leiden and 20210G-A",
    "Blood Group ABO/Rh",
    "C-reactive protein levels",
    "Cathepsin D levels",
    "CCR5Delta32 and susceptibility to HIV infection",
    "Cognitive ability",
    "Corneal curvature",
    "Corneal hysteresis",
    "Dental caries and periodontitis",
    "Duffy Antigen, malaria resistant",
    "Ear lobe type",
    "Earwax type / Armpit odor",
    "Eosinophil count",
    "Epigenetic aging",
    "Estradiol levels",
    "Eye clarity",
    "Facial aging",
    "Frequency of bowel movements",
    "Gamma glutamyl transferase levels",
    "Gene COMT",
    "Gene MTHFR",
    "Gene MTR",
    "Gene MTRR",
    "Hair color",
    "Hair texture",
    "Heat production in response to cold",
    "Height",
    "HLA-B27 antigen",
    "Insomnia",
    "Intensity of itching due to mosquito bites",
    "Left-handedness (left lateral)",
    "Liver iron levels",
    "Lymphocyte count",
    "Male baldness",
    "Mental agility",
    "Metabolizer profile CYP2C19",
    "Metabolizer profile CYP2C9",
    "Metabolizer profile CYP2D6",
    "Metabolizer profile CYP3A5",
    "Monocyte count",
    "Morning circadian rythm (Morning person)",
    "Mouth ulcers",
    "Nasion prominence",
    "Neuroticisms",
    "Neutrophil count",
    "Nicotine dependence after prolonged consumption",
    "Permanent tooth eruption",
    "Persistence of fetal hemoglobin",
    "Photic sneeze reflex",
    "Pigmented rings on the iris",
    "Probability of having red hair",
    "Probability of snoring",
    "PSA (Prostate Specific Antigen) Levels",
    "QT Intervals",
    "Red blood cell count",
    "Resistin levels",
    "Resting heart rate",
    "Risk tendency",
    "Secretor status and ABH antigens (FUT2 gene)",
    "Selectin E levels",
    "Serum albumin levels",
    "Sex hormone regulation (SHBG)",
    "Skin melanin levels",
    "Sleep duration",
    "Smell",
    "Spleen volume",
    "Telomere length",
    "Thyroid function (TSH levels)",
    "Tooth morphology",
    "Total serum protein levels",
    "Usual walking pace",
    "White blood cell count"
];

const monogenicTestNames = [
    "Alpha-1 Antitrypsin Deficiency", "Familial adenomatous polyposis",
    "Hereditary hemochromatosis associated with HFE", "Acute intermittent porphyria",
    "Agenesis of the Corpus Callosum with Peripheral Neuropathy (ACCPN)", "Alpha-mannosidosis",
    "ARSACS (Autosomal recessive spastic ataxia of Charlevoix-Saguenay)",
    "Autosomal recessive polycystic kidney disease", "Beta Thalassemia", "Biotinidase deficiency",
    "Birt-Hogg-Dube syndrome", "Bloom syndrome", "Brugada Syndrome", "Canavan Disease",
    "cblA Type Methylmalonic aciduria", "cblB Type Methylmalonic aciduria",
    "Classical homocystinuria due to CBS deficiency", "Complete achromatopsia (type 2) and Incomplete achromatopsia",
    "Congenital disorder of glycosylation type 1a (PMM2-CDG)",
    "Congenital muscular alpha-dystroglycanopathy and Walker-Warburg syndrome",
    "Congenital myasthenic syndrome", "Congenital stationary night blindness 1C", "Cowden syndrome",
    "Cystic fibrosis", "Cystinosis", "D-Bifunctional Protein Deficiency", "Diastrophic dysplasia",
    "Dihydrolipoamide Dehydrogenase Deficiency", "Dilated Cardiomyopathy 1A", "Dubin-Johnson syndrome",
    "Ehlers-Danlos Syndrome (EDS)", "Familial advanced sleep phase syndrome (FASPS)",
    "Familial breast cancer", "Familial dysautonomia (Riley-Day syndrome)", "Familial Hypercholesterolemia",
    "Familial Hypertrophic Cardiomyopathy (HCM)", "Familial Mediterranean fever",
    "Familial Transthyretin Amyloidosis", "Familiar hyperinsulinism (ABCC8-related)",
    "Fanconi Anemia (FANCC-related)", "Gaucher disease",
    "Glucose-6-phosphate dehydrogenase deficiency (G6PD deficiency)", "Glutaric Acidemia type 1",
    "Glutaric Acidemia type 2", "Glycogen storage disease type 1A (Von Gierke Disease)",
    "Glycogen storage disease type 1B", "Glycogen storage disease type 3", "Glycogen storage disease type 5",
    "Glycogenosis type 2 or Pompe disease", "GRACILE syndrome", "Hemophilia A",
    "Hereditary fructose intolerance", "Homocystinuria due to MTHFR deficiency",
    "Hypokalemic Periodic Paralysis", "Hypophosphatasia", "Junctional Epidermolysis Bullosa",
    "Leigh Syndrome, French-Canadian type (LSFC)", "Leukoencephalopathy with vanishing white matter",
    "Li-Fraumeni Syndrome", "Limb-girdle muscular dystrophy",
    "Long-chain 3-hydroxyacyl-CoA dehydrogenase deficiency", "Lynch syndrome", "Malignant Hyperthermia",
    "Maple syrup urine disease type 1B", "Medium-chain acyl-CoA dehydrogenase deficiency (MCADD)",
    "Metachromatic leukodystrophy", "Methylmalonic aciduria due to methylmalonyl-CoA mutase deficiency",
    "Mucolipidosis IV", "Mucolipidosis type II", "Multiple endocrine neoplasia 2B",
    "Neurofibromatosis type I", "Neuronal Ceroid-Lipofuscinoses type 1 (associated to PPT1)",
    "Neuronal Ceroid-Lipofuscinoses type 3 (associated to CLN3)",
    "Neuronal Ceroid-Lipofuscinoses type 5 (associated to CLN5)",
    "Neuronal Ceroid-Lipofuscinoses type 6 (associated to CLN6)",
    "Neuronal Ceroid-Lipofuscinoses type 7 (associated to MFSD8)", "Niemann-Pick disease type A",
    "Non-syndromic mitochondrial hearing loss", "Nonsyndromic Hearing Loss and Deafness, DFNB1",
    "Pendred syndrome", "Peters plus syndrome", "Phenylketonuria", "Pontocerebellar hypoplasia",
    "Primary hyperoxaluria type 1 (PH1)", "Primary hyperoxaluria type 2 (PH2)",
    "Pyridoxine-dependent epilepsy", "Pyruvate kinase deficiency", "Refsum disease", "Retinitis pigmentosa",
    "Rhizomelic Chondrodysplasia Punctata Type 1", "Salla Disease",
    "Short chain acyl-CoA dehydrogenase deficiency (SCADD)", "Sjögren-Larsson syndrome",
    "Tay-Sachs disease", "Type 1 Oculocutaneous albinism (tyrosinase negative)",
    "Type 2 oculocutaneous albinism (tyrosinase positive)", "Tyrosinemia type I", "Usher syndrome",
    "Very long chain acyl-CoA dehydrogenase deficiency (VLCADD)", "von Willebrand disease",
    "Wilson disease", "Zellweger syndrome"
];

const complexTestNames = [
    "Abdominal aortic aneurysm",
    "Abdominal hernia",
    "Actinic keratosis",
    "Addison's disease",
    "Adolescent idiopathic scoliosis",
    "Age-related hearing impairment",
    "Age-related macular degeneration",
    "Allergic rhinitis",
    "Alzheimer's disease",
    "Amyotrophic lateral sclerosis",
    "Angina pectoris",
    "Anxiety",
    "Arterial hypertension",
    "Asthma",
    "Atopic dermatitis",
    "Atrial fibrillation",
    "Barrett's esophagus",
    "Basal cell carcinoma",
    "Benign prostatic hyperplasia",
    "Bipolar disorder",
    "Carpal tunnel syndrome",
    "Cataracts",
    "Chronic kidney disease",
    "Chronic lymphocytic leukemia",
    "Chronic Obstructive Pulmonary Disease",
    "Colon polyp",
    "Colorectal cancer",
    "Coronary heart disease",
    "Crohn's disease",
    "Cutaneous malignant melanoma",
    "Deep vein thrombosis",
    "Depression",
    "Diabetes mellitus type 1",
    "Diabetes mellitus type 2",
    "Diaphragmatic hernia",
    "Diverticulosis - Diverticulitis",
    "Dupuytren's disease",
    "Fasciitis",
    "Gallstones",
    "Gastroesophageal reflux disease",
    "General osteoarthritis",
    "Glioblastoma",
    "Glioma",
    "Gout",
    "Graves' disease",
    "Haemorrhoidal disease",
    "Hallux valgus",
    "Hashimoto's thyroiditis",
    "Headaches",
    "Heart failure",
    "Hypercholesterolemia",
    "Hyperlipidemia",
    "Hypothyroidism",
    "Idiopathic pulmonary fibrosis",
    "Inguinal hernia",
    "Intracranial aneurysm",
    "Ischemic stroke",
    "Juvenile idiopathic arthritis",
    "Keratoconus",
    "Lung cancer",
    "Macular telangiectasia type 2",
    "Migraines",
    "Monoclonal Gammopathy of Uncertain Significance",
    "Multiple myeloma",
    "Multiple sclerosis",
    "Myeloproliferative neoplasms",
    "Myocardial infarction",
    "Narcolepsy",
    "Nasal polyps",
    "Neuroblastoma",
    "Non-alcoholic fatty liver disease",
    "Non-celiac intestinal malabsorption",
    "Non-medullary thyroid cancer",
    "Non-syndromic cleft lip",
    "Non-toxic multinodular goiter",
    "Open angle glaucoma",
    "Oral cavity and oropharyngeal cancer",
    "Osteoarthritis of the hip",
    "Osteoarthritis of the knee",
    "Osteoporosis",
    "Pancreatic cancer",
    "Parkinson's disease",
    "Peripheral arterial disease",
    "Primary Biliary Cirrhosis",
    "Prostate cancer",
    "Psoriasis",
    "Pulmonary embolism",
    "Restless legs syndrome",
    "Rheumatoid arthritis",
    "Sarcoidosis",
    "Schizophrenia",
    "Sensorineural hearing loss",
    "Spinal canal stenosis",
    "Squamous cell carcinoma of the skin",
    "Systemic lupus erythematosus",
    "Systemic sclerosis",
    "Testicular germ cell cancer",
    "Ulcerative colitis",
    "Urolithiasis",
    "Varicose veins",
    "Vitiligo"
];

const pharmaData = [
    { name: "Celecoxib (Dosage)", action: "Non-steroidal anti-inflammatory drugs" },
    { name: "Docetaxel (Adverse effects)", action: "Antineoplastics" },
    { name: "Efavirenz (Adverse effects)", action: "Antivirals" },
    { name: "Fluvastatin (Dosage)", action: "Hypolipidemic agents" },
    { name: "Ibuprofen (Dosage)", action: "Anti-inflammatory" },
    { name: "Ivacaftor (Efficacy)", action: "Other drugs for the respiratory system" },
    { name: "Methotrexate (Adverse Reactions)", action: "Immunomodulators" },
    { name: "Methotrexate in rheumatoid arthritis (Efficacy)", action: "Immunomodulators" },
    { name: "Olanzapine (Adverse effects)", action: "Antipsychotics" },
    { name: "Olanzapine (Efficacy)", action: "Antipsychotics" },
    { name: "Phenytoin (Dosage)", action: "Antiepileptics" },
    { name: "Tacrolimus (Dosage)", action: "Immunosuppressants" },
    { name: "Thioguanine, Azathioprine, Mercaptopurine (Dosage)", action: "Immunosuppressants" },
    { name: "Valproic Acid (Adverse effects)", action: "Antiepileptics" },
    { name: "Warfarin (Adverse Reactions)", action: "Antithrombotics" },
    { name: "Abacavir (Adverse effects)", action: "Antivirals" },
    { name: "Acenocoumarol, Fenprocoumon (Adverse effects)", action: "Antithrombotics" },
    { name: "Amifampridine (Dosage)", action: "Cholinergics" },
    { name: "Aminoglycoside antibiotics (Adverse effects)", action: "Antibiotics" },
    { name: "Amitriptyline (Dosage)", action: "Antidepressants" },
    { name: "Aripiprazole (Dosage)", action: "Antipsychotics" },
    { name: "Atazanavir (Adverse effects)", action: "Antivirals" },
    { name: "Atomoxetine (Dosage)", action: "Centrally acting psychostimulants" },
    { name: "Atorvastatin (Dosage)", action: "Hypolipidemic agents" },
    { name: "Brexpiprazole (Dosage)", action: "Antipsychotics" },
    { name: "Brivaracetam (Dosage)", action: "Anti-acid treatment" },
    { name: "Carbamazepine (Dosage)", action: "Antiepileptics" },
    { name: "Citalopram (Dosage)", action: "Antidepressants" },
    { name: "Clobazam (Adverse Reactions)", action: "Muscle relaxants" },
    { name: "Clomipramine (Dosage)", action: "Antidepressants" },
    { name: "Clopidogrel (Dosage)", action: "Antithrombotics" },
    { name: "Codeine (Dosage)", action: "Opioid analgesics" },
    { name: "Desipramine (Dosage)", action: "Antidepressants" },
    { name: "Diazepam (Adverse Reactions)", action: "Anxiolytics" },
    { name: "Doxepin (Dosage)", action: "Antidepressants" },
    { name: "Escitalopram (Dosage)", action: "Antidepressants" },
    { name: "Fentanyl (Efficacy)", action: "Opioid analgesics" },
    { name: "Flecainide (Dosage)", action: "Antiarrhythmics" },
    { name: "Floxacillin (Adverse effects)", action: "Antibiotics" },
    { name: "Fluorouracil, Capecitabine (Dosage)", action: "Antineoplastics" },
    { name: "Fluvoxamine (Dosage)", action: "Antipsychotics" },
    { name: "G6PD Deficiency and Adverse Drug Reactions", action: "Multiple pharmacological actions" },
    { name: "Haloperidol (Dosage)", action: "Antipsychotics" },
    { name: "Hydrochlorothiazide (Efficacy)", action: "Antihypertensives" },
    { name: "Iloperidone (Dosage)", action: "Antipsychotics" },
    { name: "Imipramine (Dosage)", action: "Antidepressants" },
    { name: "Inhalation anesthetics and succinylcholine (Adverse Reactions)", action: "General anesthetics" },
    { name: "Irinotecan (Adverse effects)", action: "Antineoplastics" },
    { name: "Isoniazid (Adverse effects)", action: "Antibiotics" },
    { name: "Lansoprazole, Dexlansoprazole (Dosage)", action: "Anti-acid treatment" },
    { name: "Lovastatin (Dosage)", action: "Hypolipidemic agents" },
    { name: "Lumacaftor + Ivacaftor (Efficacy)", action: "Other drugs for the respiratory system" },
    { name: "Metoprolol (Dosage)", action: "Beta-blockers cardiovascular system" },
    { name: "Mirtazapine (Adverse Reactions)", action: "Antidepressants" },
    { name: "Nortriptyline (Dosage)", action: "Antidepressants" },
    { name: "Omeprazole (Dosage)", action: "Anti-acid treatment" },
    { name: "Pantoprazole (Dosage)", action: "Anti-acid treatment" },
    { name: "Paroxetin (Dosage)", action: "Antidepressants" },
    { name: "Peginterferons alfa-2a -2b and ribavirin (Efficacy)", action: "Antivirals" },
    { name: "Pimozide (Dosage)", action: "Antipsychotics" },
    { name: "Pitavastatin (Dosage)", action: "Hypolipidemic agents" },
    { name: "Pravastatin (Dosage)", action: "Hypolipidemic agents" },
    { name: "Quetiapine (Dosage)", action: "Antipsychotics" },
    { name: "Risperidone (Dosage)", action: "Antipsychotics" },
    { name: "Rosuvastatin (Dosage)", action: "Hypolipidemic agents" },
    { name: "Selective Serotonin Reuptake Inhibitors (SSRIs) (Adverse effects)", action: "Antidepressants" },
    { name: "Sertraline (Dosage)", action: "Antidepressants" },
    { name: "Simvastatin (Dosage)", action: "Hypolipidemic agents" },
    { name: "Statins (Dosage and risk of myopathy)", action: "Hypolipidemic agents" },
    { name: "Tamoxifen (Efficacy)", action: "Antipsychotics" },
    { name: "Tramadol (Dosage)", action: "Opioid analgesics" },
    { name: "Trimipramine (Dosage)", action: "Antidepressants" },
    { name: "Venlafaxine (Dosage)", action: "Antidepressants" },
    { name: "Voriconazole (Dosage)", action: "Antifungals" },
    { name: "Vortioxetine (Dosage)", action: "Antidepressants" },
    { name: "Zuclopenthixol (Dosage)", action: "Antipsychotics" }
];

// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    // --- DOM ELEMENTS ---
    const processBtn = document.getElementById('processBtn');
    const statusDiv = document.getElementById('status');
    const jsonOutput = document.getElementById('jsonOutput');
    const downloadLink = document.getElementById('downloadLink');
    const spinner = document.getElementById('spinner');
    const btnText = document.getElementById('btnText');
    const patientTableBody = document.getElementById('patient-table-body');
    const searchInput = document.getElementById('search-patients');

    // --- UPLOAD PAGE LOGIC ---
    processBtn.addEventListener('click', handleProcessing);

    async function handleProcessing() {
        const userName = document.getElementById('userName').value.trim();
        const userId = document.getElementById('userId').value.trim();
        const testType = document.querySelector('input[name="testType"]:checked').value;
        const pdfFile = document.getElementById('pdfFile').files[0];

        if (!userName || !userId || !pdfFile) {
            updateStatus('Error: Please fill in all fields and select a PDF file.', true);
            return;
        }

        toggleLoading(true);
        updateStatus('Reading PDF file...');

        try {
            const pdfText = await extractTextFromPdf(pdfFile);
            updateStatus('PDF text extracted. Parsing data...');

            let jsonData;
            if (testType === 'Pharma') {
                jsonData = parsePharmaText(pdfText, pharmaData);
            } else {
                let parameterList;
                if (testType === 'Wellness') parameterList = wellnessTestNames;
                else if (testType === 'Traits') parameterList = traitsTestNames;
                else if (testType === 'Monogenic') parameterList = monogenicTestNames;
                else parameterList = complexTestNames;
                jsonData = parseText(pdfText, parameterList);
            }

            updateStatus('Data parsed successfully. Generating JSON...');
            generateJsonFile(jsonData, userName, userId);

            await uploadJsonToServer(userName, userId, testType, jsonData);

            // Refresh the patient table after successful upload
            fetchAllPatients();

        } catch (error) {
            console.error('Processing failed:', error);
            updateStatus('An error occurred: ${error.message}', true);
        } finally {
            toggleLoading(false);
        }
    }

    async function extractTextFromPdf(file) {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
        let fullText = '';
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            fullText += textContent.items.map(item => item.str).join(' ') + '\n';
        }
        return fullText;
    }

    function parseText(text, parameterNames) {
        const cleanText = text.replace(/\s+/g, ' ').trim();
        const results = {};
        parameterNames.forEach(param => {
            const escapedParam = param.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const nextParamsLookahead = parameterNames.filter(p => p !== param).map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
            const regex = new RegExp(escapedParam + '\\s*(.*?)(?=' + nextParamsLookahead + '|$)', 'i');
            const match = cleanText.match(regex);
            if (match && match[1]) {
                let resultText = match[1].trim();
                parameterNames.forEach(pNameToClean => {
                    const index = resultText.indexOf(pNameToClean);
                    if (index !== -1) resultText = resultText.substring(0, index).trim();
                });
                if (resultText) results[param] = resultText;
            }
        });
        return results;
    }

    function parsePharmaText(text, pharmaParameters) {
        const cleanText = text.replace(/\s+/g, ' ').trim();
        const results = [];
        const drugNames = pharmaParameters.map(p => p.name);
        pharmaParameters.forEach(param => {
            const escapedParam = param.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const nextParamsLookahead = drugNames.filter(p => p !== param.name).map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
            const regex = new RegExp(escapedParam + '\\s*(.*?)(?=' + nextParamsLookahead + '|$)', 'i');
            const match = cleanText.match(regex);
            if (match && match[1]) {
                let resultText = match[1].trim();
                drugNames.forEach(pNameToClean => {
                    const index = resultText.indexOf(pNameToClean);
                    if (index !== -1) resultText = resultText.substring(0, index).trim();
                });
                if (resultText) {
                    results.push({ name: param.name, action: param.action, result: resultText });
                }
            }
        });
        return results;
    }

    async function uploadJsonToServer(userName, userId, testType, jsonData) {
        updateStatus('Uploading results to server...');
        const apiUrl = 'https://www.codex.somee.com/api/Codex/AddResults';
        const payload = { PatientName: userName, PhoneNumber: userId, TestType: testType, Results: JSON.stringify(jsonData) };
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error('Server responded with status ${response.status}: ${errorText}');
            }
            const result = await response.json();
            console.log('Server response:', result);
            updateStatus('Upload successful!', false, true);
        } catch (error) {
            console.error('Upload failed:', error);
            updateStatus('Upload failed: ${error.message}', true);
            throw error;
        }
    }

    function generateJsonFile(data, name, id) {
        const jsonString = JSON.stringify(data, null, 4);

        // Show JSON inside your output element
        jsonOutput.textContent = jsonString;

        // Create blob for download
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        // Build filename safely
        const filename = `${name.replace(/\s+/g, '_')}_${id}.json`;

        // Update download link
        downloadLink.href = url;
        downloadLink.download = filename;
        downloadLink.classList.remove('hidden');
    }

    function updateStatus(message, isError = false, isSuccess = false) {
        statusDiv.textContent = message;
        statusDiv.classList.remove('text-red-600', 'text-green-600', 'text-gray-600');
        if (isError) statusDiv.classList.add('text-red-600');
        else if (isSuccess) statusDiv.classList.add('text-green-600');
        else statusDiv.classList.add('text-gray-600');
    }

    function toggleLoading(isLoading) {
        processBtn.disabled = isLoading;
        processBtn.classList.toggle('cursor-not-allowed', isLoading);
        processBtn.classList.toggle('opacity-75', isLoading);
        spinner.classList.toggle('hidden', !isLoading);
        btnText.textContent = isLoading ? 'Processing...' : 'Process & Upload Report';
    }

    // --- ADMIN DASHBOARD LOGIC ---
    // Fetch all patients and their test counts/types
    async function fetchAllPatients() {
        const allPatientsApiUrl = `https://www.codex.somee.com/api/Codex/GetAllPatients`;

        try {
            // 1. Fetch the initial list of all patients
            const response = await fetch(allPatientsApiUrl);
            if (!response.ok) {
                throw new Error(`Server responded with status ${response.status}`);
            }

            const patients = await response.json();
            console.log("Initial patient list:", patients);

            // 2. For each patient, fetch their specific test results
            const patientPromises = patients.map(async (patient) => {
                const resultsApiUrl = `https://www.codex.somee.com/api/Codex/GetAllTestResults/${patient.id}`;

                try {
                    const resultsResponse = await fetch(resultsApiUrl);

                    if (resultsResponse.ok) {
                        const resultsData = await resultsResponse.json();
                        console.log(`Patient ${patient.id} results:`, resultsData);

                        let testsArray = null;

                        // Handle different possible structures
                        if (resultsData.tests) {
                            testsArray = resultsData.tests;
                        } else if (resultsData.data && resultsData.data.tests) {
                            testsArray = resultsData.data.tests;
                        } else if (Array.isArray(resultsData)) {
                            testsArray = resultsData;
                        }

                        // Count of tests
                        patient.reportCount = testsArray ? testsArray.length : 0;

                        // Extract test types
                        if (testsArray && testsArray.length > 0) {
                            patient.testTypes = testsArray.map(test => {
                                console.log("Processing test:", test);

                                // Try various property names
                                if (test.TestType) {
                                    if (typeof test.TestType === "string") {
                                        return test.TestType;
                                    } else if (typeof test.TestType === "object") {
                                        return test.TestType.name || "Unknown Test";
                                    }
                                }
                                if (test.testType) {
                                    if (typeof test.testType === "string") {
                                        return test.testType;
                                    } else if (typeof test.testType === "object") {
                                        return test.testType.name || "Unknown Test";
                                    }
                                }
                                if (typeof test === "string") {
                                    return test;
                                }
                                if (test.name) {
                                    return test.name;
                                }

                                console.warn("Unknown test format:", test);
                                return "Unknown Test";
                            });
                        } else {
                            patient.testTypes = [];
                        }
                    } else {
                        // No results / API error
                        patient.reportCount = 0;
                        patient.testTypes = [];
                    }

                } catch (e) {
                    console.error(`Error fetching results for patient ${patient.id}:`, e);
                    patient.reportCount = 0;
                    patient.testTypes = [];
                }

                return patient;
            });

            // 3. Wait for all fetches
            const patientsWithCounts = await Promise.all(patientPromises);

            // 4. Populate the table
            populateTable(patientsWithCounts);

        } catch (error) {
            console.error("Failed to fetch patient data:", error);
            patientTableBody.innerHTML = `
            <tr>
                <td colspan="7" class="text-center p-8 text-red-500">
                    Failed to load patient data.
                </td>
            </tr>
        `;
        }
    }

    function populateTable(patients) {
        console.log(patients);
        const patientTableBody = document.getElementById('patient-table-body');
        patientTableBody.innerHTML = '';

        if (!patients || patients.length === 0) {
            patientTableBody.innerHTML = `
            <tr>
                <td colspan="7" class="text-center p-8 text-gray-500">
                    No patients found.
                </td>
            </tr>`;
            return;
        }

        patients.forEach(patient => {
            const row = document.createElement('tr');
            row.className = 'table-row';
            row.setAttribute('data-patient-id', patient.id || '');

            const reportCount = patient.reportCount || 0;
            const testTypes = patient.testTypes || [];

            row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                ${patient.id || 'N/A'}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${patient.name || 'Unknown'}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${patient.phoneNumber || 'N/A'}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                <div class="flex flex-col">
                    <span class="font-bold">${reportCount}</span>
                    <span class="text-xs text-gray-400">
                        ${testTypes.length > 0 ? testTypes.join(', ') : 'No tests'}
                    </span>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex flex-col space-y-2">
                    <button onclick="launchReport('${patient.id}')" 
                        class="text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-3 py-1 rounded-md transition-colors duration-200 flex items-center space-x-1">
                        <i data-lucide="external-link" class="w-4 h-4"></i>
                        <span>Launch Report</span>
                    </button>
                    <button onclick="testLocal('${patient.id}')" 
                        class="text-purple-600 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 px-3 py-1 rounded-md transition-colors duration-200 flex items-center space-x-1">
                        <i data-lucide="test-tube" class="w-4 h-4"></i>
                        <span>Test Local</span>
                    </button>
                    <button onclick="copyUserLink('${patient.id}')" 
                        class="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-md transition-colors duration-200 flex items-center space-x-1">
                        <i data-lucide="copy" class="w-4 h-4"></i>
                        <span>Copy Link</span>
                    </button>
                    <button onclick="copyLocalLink('${patient.id}')" 
                        class="text-orange-600 hover:text-orange-900 bg-orange-50 hover:bg-orange-100 px-3 py-1 rounded-md transition-colors duration-200 flex items-center space-x-1">
                        <i data-lucide="copy" class="w-4 h-4"></i>
                        <span>Copy Local Link</span>
                    </button>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button 
                    onclick="deletePatient('${patient.id}', '${patient.name || 'Unknown'}')" 
                    data-patient-id="${patient.id}"
                    class="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors duration-200 flex items-center space-x-1">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                    <span>Delete</span>
                </button>
            </td>
        `;
            patientTableBody.appendChild(row);
        });

        // Refresh lucide icons after rendering
        if (window.lucide) {
            lucide.createIcons();
        }
    }

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const rows = patientTableBody.querySelectorAll('tr');

        rows.forEach(row => {
            const nameCell = row.querySelector('td:nth-child(2)');
            const phoneCell = row.querySelector('td:nth-child(3)');

            if (nameCell && phoneCell) {
                const name = nameCell.textContent.toLowerCase();
                const phone = phoneCell.textContent.toLowerCase();

                if (name.includes(searchTerm) || phone.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            }
        });
    });

    // Initial fetch and render
    fetchAllPatients();
    lucide.createIcons();

    // Add close results functionality
    document.getElementById('close-results').addEventListener('click', () => {
        document.getElementById('results-section').classList.add('hidden');
    });
});

// Get correct base URL automatically
function getBaseUrl() {
    return window.location.origin; 
}

// Build User_Page URL dynamically
function getUserPageUrl(patientId) {
    return `${getBaseUrl()}/user_page/User_Page.html?id=${patientId}`;
}

// Launch the report page
// function launchReport(patientId) {
//     const url = getUserPageUrl(patientId);
//     console.log("Opening user page:", url);
//     window.open(url, "_blank");
// }

// Global function for launching reports (called from HTML onclick)
async function launchReport(patientId) {
    try {
        // Find patient info from the table
        const patientRow = document.querySelector(`tr[data-patient-id="${patientId}"]`);
        if (!patientRow) {
            throw new Error('Patient information not found');
        }

        const patientName = patientRow.querySelector('td:nth-child(2)')?.textContent || "";
        const patientPhone = patientRow.querySelector('td:nth-child(3)')?.textContent || "";

        // Store patient data in localStorage for the user page to access
        const patientData = {
            id: patientId,
            name: patientName,
            phone: patientPhone
        };
        localStorage.setItem('patientData', JSON.stringify(patientData));

        // Build user page URL dynamically (works both local + deployed)
        const baseUrl = `${window.location.origin}/user_page/User_Page.html`;
        const externalUrl = `${baseUrl}?id=${patientId}`;

        console.log('Opening user page:', externalUrl);

        // Open in new tab
        window.open(externalUrl, '_blank');

    } catch (error) {
        console.error('Error launching report:', error);
        alert(`Error launching report: ${error.message}`);
    }
}

// Function to test locally by opening User_Page.html with patient data
function testLocal(patientId) {
    console.log(`Testing locally for patient ${patientId}`);

    try {
        // Find patient info from the table
        const patientRow = document.querySelector(`tr[data-patient-id="${patientId}"]`);
        if (!patientRow) {
            throw new Error('Patient information not found');
        }

        const patientName = patientRow.querySelector('td:nth-child(2)').textContent;
        const patientPhone = patientRow.querySelector('td:nth-child(3)').textContent;

        // Store patient data in localStorage for the user page to access
        const patientData = {
            id: patientId,
            name: patientName,
            phone: patientPhone
        };
        localStorage.setItem('patientData', JSON.stringify(patientData));

        // Open local user page with patient ID parameter
        const localUserPageUrl = `./user_page/User_Page.html?id=${patientId}`;
        console.log('Opening local user page:', localUserPageUrl);
        window.open(localUserPageUrl, '_blank');

    } catch (error) {
        console.error('Error testing locally:', error);
        alert(`Error testing locally: ${error.message}`);
    }
}

// Function to open User_Page.html with patient data
function openUserPageWithData(patientId, patientName, patientPhone, resultsData) {
    // Prepare the data to pass to the user page
    const patientData = {
        id: patientId,
        name: patientName,
        phone: patientPhone,
        results: resultsData
    };

    // Store the data in localStorage so the user page can access it
    localStorage.setItem('patientData', JSON.stringify(patientData));

    // Open the user page in a new window/tab
    const userPageUrl = './user_page/User_Page.html';
    window.open(userPageUrl, '_blank');
}

// Function to copy local user page link to clipboard
async function copyLocalLink(patientId, event) {
    try {
        // Build local link dynamically from current location
        const localUserLink = `${window.location.origin}${window.location.pathname.replace('index.html', '')}user_page/User_Page.html?id=${patientId}`;

        // Use modern clipboard API if available
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(localUserLink);
        } else {
            // Fallback for older browsers or non-secure contexts
            const textArea = document.createElement('textarea');
            textArea.value = localUserLink;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }

        // Show success feedback
        const copyBtn = event.target.closest('button');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i><span>Copied!</span>';
        copyBtn.classList.remove('text-orange-600', 'hover:text-orange-900', 'bg-orange-50', 'hover:bg-orange-100');
        copyBtn.classList.add('text-green-600', 'bg-green-50');

        // Reset button after 2 seconds
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.classList.remove('text-green-600', 'bg-green-50');
            copyBtn.classList.add('text-orange-600', 'hover:text-orange-900', 'bg-orange-50', 'hover:bg-orange-100');
        }, 2000);

        console.log('Local user link copied to clipboard:', localUserLink);

    } catch (error) {
        console.error('Error copying local user link:', error);
        alert(
            'Failed to copy local link to clipboard. Please copy manually: ' +
            `${window.location.origin}${window.location.pathname.replace('index.html', '')}user_page/User_Page.html?id=${patientId}`
        );
    }
}

// Function to copy user link to clipboard
async function copyUserLink(patientId, event) {
    try {
        // Build the user link
        const userLink = `https://codex.natixglobal.com/user?id=${patientId}`;

        // Use modern clipboard API if available
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(userLink);
        } else {
            // Fallback for older browsers or non-secure contexts
            const textArea = document.createElement('textarea');
            textArea.value = userLink;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }

        // Show success feedback
        const copyBtn = event.target.closest('button');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i><span>Copied!</span>';
        copyBtn.classList.remove('text-blue-600', 'hover:text-blue-900', 'bg-blue-50', 'hover:bg-blue-100');
        copyBtn.classList.add('text-green-600', 'bg-green-50');

        // Reset button after 2 seconds
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.classList.remove('text-green-600', 'bg-green-50');
            copyBtn.classList.add('text-blue-600', 'hover:text-blue-900', 'bg-blue-50', 'hover:bg-blue-100');
        }, 2000);

        console.log('User link copied to clipboard:', userLink);

    } catch (error) {
        console.error('Error copying user link:', error);
        alert(`Failed to copy link to clipboard. Please copy manually: https://codex.natixglobal.com/user?id=${patientId}`);
    }
}

// Function to delete a patient
async function deletePatient(patientId, patientName) {
    // Show confirmation dialog
    if (!confirm(`Are you sure you want to delete patient "${patientName}"? This action cannot be undone.`)) {
        return;
    }

    // Select the delete button
    const deleteBtn = document.querySelector(`button[data-patient-id="${patientId}"]`);

    try {
        // Show loading state
        if (deleteBtn) {
            deleteBtn.disabled = true;
            deleteBtn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Deleting...';
        }

        // Call the delete API
        const deleteUrl = `https://www.codex.somee.com/api/Codex/DeletePatient/${patientId}`;
        const response = await fetch(deleteUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to delete patient: ${response.status}`);
        }

        // Show success message
        alert(`Patient "${patientName}" has been successfully deleted.`);

        // Refresh the patient table
        await fetchAllPatients();

    } catch (error) {
        console.error('Error deleting patient:', error);
        alert(`Error deleting patient: ${error.message}`);

        // Reset button state on error
        if (deleteBtn) {
            deleteBtn.disabled = false;
            deleteBtn.innerHTML = '<i data-lucide="trash-2" class="w-4 h-4"></i> Delete';
        }
    }
}

// Function to display test content
function displayTestContent(test, testIndex) {
    const contentContainer = document.getElementById('test-results-content');

    try {
        let testType = extractTestType(test);
        let results = null;

        // Extract results from different possible structures
        if (test.Results) {
            try {
                results = JSON.parse(test.Results);
            } catch (e) {
                results = test.Results; // If already parsed
            }
        } else if (test.results) {
            try {
                console.log('Parsing results from:', test.results);
                results = JSON.parse(test.results);
                console.log('Parsed results:', results);
            } catch (e) {
                console.error('Error parsing results JSON:', e);
                console.log('Raw results:', test.results);
                results = test.results; // Use raw if parsing fails
            }
        }

        // Handle empty results
        if (!results) {
            contentContainer.innerHTML = `
                <div class="text-center p-8 text-gray-500">
                    No results data available for this test.
                </div>
            `;
            return;
        }

        // Generate HTML based on test type and results
        let html = `
            <div class="space-y-6">
                <h3 class="text-xl font-semibold text-gray-800">${testType}</h3>
                ${testType === 'Pharma'
                    ? generatePharmaResultsHTML(results)
                    : generateStandardResultsHTML(results)
                }
            </div>
        `;

        contentContainer.innerHTML = html;

    } catch (error) {
        console.error('Error displaying test content:', error);
        contentContainer.innerHTML = `
            <div class="text-center p-8 text-red-500">
                Error displaying test content.
            </div>
        `;
    }
}

// Function to generate standard results HTML
function generateStandardResultsHTML(results) {
    let html = '';

    if (Array.isArray(results)) {
        results.forEach((result, index) => {
            html += `
                <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-gray-800 mb-2">Result ${index + 1}</h4>
                    <pre class="text-sm text-gray-600 whitespace-pre-wrap">${JSON.stringify(result, null, 2)}</pre>
                </div>
            `;
        });
    } else if (typeof results === 'object' && results !== null) {
        Object.entries(results).forEach(([key, value]) => {
            html += `
                <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-gray-800 mb-2">${key}</h4>
                    <p class="text-sm text-gray-600">${value}</p>
                </div>
            `;
        });
    } else {
        html += `
            <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600">${results}</p>
            </div>
        `;
    }

    return html;
}

// Function to generate test tabs
function generateTestTabs(testsArray) {
    const tabsContainer = document.getElementById('test-tabs');
    tabsContainer.innerHTML = '';

    testsArray.forEach((test, index) => {
        const testType = extractTestType(test);
        const tab = document.createElement('button');
        tab.className = 'py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200';
        tab.textContent = testType;
        tab.dataset.testIndex = index;

        // Set active state for first tab
        if (index === 0) {
            tab.classList.add('border-green-500', 'text-green-600');
        } else {
            tab.classList.add('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
        }

        tab.addEventListener('click', () => {
            // Update active tab
            tabsContainer.querySelectorAll('button').forEach(btn => {
                btn.classList.remove('border-green-500', 'text-green-600');
                btn.classList.add('border-transparent', 'text-gray-500');
            });
            tab.classList.remove('border-transparent', 'text-gray-500');
            tab.classList.add('border-green-500', 'text-green-600');

            // Display test content
            displayTestContent(test, index);
        });

        tabsContainer.appendChild(tab);
    });
}

// Function to extract test type from test object
function extractTestType(test) {
    // Check for your API structure first
    if (test.test_type) {
        return test.test_type;
    }

    // Fallback to other possible structures
    if (test.TestType) {
        if (typeof test.TestType === 'string') return test.TestType;
        if (typeof test.TestType === 'object') return test.TestType.name || 'Unknown Test';
    }
    if (test.testType) {
        if (typeof test.testType === 'string') return test.testType;
        if (typeof test.testType === 'object') return test.testType.name || 'Unknown Test';
    }
    if (typeof test === 'string') return test;
    if (test.name) return test.name;
    return 'Unknown Test';
}

// Function to display test content
// Function to display test content
function displayTestContent(test, testIndex) {
    const contentContainer = document.getElementById('test-results-content');

    try {
        let testType = extractTestType(test);
        let results = null;

        // Extract results from different possible structures
        if (test.Results) {
            try {
                results = JSON.parse(test.Results);
            } catch (e) {
                results = test.Results; // If already parsed
            }
        } else if (test.results) {
            try {
                console.log('Parsing results from:', test.results);
                results = JSON.parse(test.results);
                console.log('Parsed results:', results);
            } catch (e) {
                console.error('Error parsing results JSON:', e);
                console.log('Raw results:', test.results);
                results = test.results; // Use raw if parsing fails
            }
        }

        // Handle empty results
        if (!results) {
            contentContainer.innerHTML = `
                <div class="text-center p-8 text-gray-500">
                    No results data available for this test.
                </div>
            `;
            return;
        }

        // Generate HTML based on test type and results
        let html = `
            <div class="space-y-6">
                <h3 class="text-xl font-semibold text-gray-800">${testType}</h3>
                ${testType === 'Pharma'
                ? generatePharmaResultsHTML(results)
                : generateStandardResultsHTML(results)
            }
            </div>
        `;

        contentContainer.innerHTML = html;

    } catch (error) {
        console.error('Error displaying test content:', error);
        contentContainer.innerHTML = `
            <div class="text-center p-8 text-red-500">
                Error displaying test content.
            </div>
        `;
    }
}

// Function to generate pharmacogenomics results HTML
function generatePharmaResultsHTML(results) {
    let html = '';

    if (Array.isArray(results)) {
        results.forEach((result, index) => {
            const actionIcon = getActionIcon(result.action);
            html += `
                <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                    <div class="flex items-center mb-2">
                        ${actionIcon}
                        <h4 class="font-semibold text-gray-800 ml-2">${result.name || 'Unnamed Test'}</h4>
                    </div>
                    <p class="text-sm text-gray-600 mb-2"><strong>Action:</strong> ${result.action || 'N/A'}</p>
                    <p class="text-sm text-gray-600"><strong>Result:</strong> ${result.result || 'N/A'}</p>
                </div>
            `;
        });
    } else {
        html += `
            <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600 whitespace-pre-wrap">
                    ${typeof results === 'object' ? JSON.stringify(results, null, 2) : results}
                </p>
            </div>
        `;
    }

    return html;
}

// Function to get action icon for pharmacogenomics
function getActionIcon(action) {
    if (action && action.toLowerCase().includes('dosage')) {
        return '<i data-lucide="pill" class="w-5 h-5 text-blue-600"></i>';
    } else if (action && action.toLowerCase().includes('adverse')) {
        return '<i data-lucide="alert-triangle" class="w-5 h-5 text-red-600"></i>';
    } else if (action && action.toLowerCase().includes('efficacy')) {
        return '<i data-lucide="check-circle" class="w-5 h-5 text-green-600"></i>';
    }
    return '<i data-lucide="activity" class="w-5 h-5 text-gray-600"></i>';
}
