// Patient Results Handler for User_Page.html
// This script handles displaying patient test results in the existing parameter structure

// Test name arrays for matching (these should match the data files)
const wellnessTestNames = [
    "Antioxidant capacity", "Apolipoprotein A1", "Apolipoprotein B", "Bitter taste perception", 
    "Blood glucose", "Body fat percentage", "Body mass index", "Bone mineral density", 
    "Caffeine and anxiety", "Caffeine and sports performance", "Caffeine dependence after prolonged consumption", 
    "Calcium levels", "Celiac disease predisposition", "Creatinine levels", "Diastolic blood pressure levels", 
    "Exercise-induced muscle damage (initial phase)", "Exercise-induced muscle damage (regeneration capacity)", 
    "Exercise-induced muscle damage (second phase)", "Farmer-hunter profile", "Food intake control", 
    "Galectin-3 levels", "Genetic predisposition to peanut allergy", "Glycated hemoglobin levels", 
    "HDL cholesterol levels", "Histamine intolerance", "Intraocular pressure", "Lactose intolerance", 
    "LDL cholesterol levels", "Levels of vitamin A (beta carotene)", "Long-chain omega fatty acids levels", 
    "Lung function (exhaled air volume)", "Muscle endurance", "Myoadenylate deaminase (AMPD1 gene)", 
    "Prediction of visceral adipose tissue", "Preference for sweets", "Serum phosphate levels", 
    "Tendinopathies in lower extremities (legs)", "Tendinopathies in upper extremities (arms)", 
    "Urate levels", "Vitamin B12 levels", "Vitamin C levels", "Vitamin D levels", "Vitamin E levels"
];

const traitsTestNames = [
    "Acne vulgaris", "Alanine aminotransferase levels", "Alcohol dependence after prolonged consumption", 
    "Alcohol flush reaction", "Alkaline phosphatase levels", "Asparagus odor detection", 
    "Aspartate aminotransferase levels", "Basal metabolic rate", "Bilirubin levels", "Birth weight", 
    "Blood coagulation, factor V Leiden and 20210G-A", "Blood Group ABO/Rh", "C-reactive protein", 
    "Cathepsin D levels", "CCR5Delta32 and susceptibility to HIV infection", "Cognitive ability", 
    "Corneal curvature", "Corneal hysteresis", "Dental caries and periodontitis", 
    "Duffy Antigen, malaria resistant", "Ear lobe type", "Earwax type / Armpit odor", 
    "Eosinophil count", "Epigenetic aging", "Estradiol levels", "Eye clarity", "Facial aging", 
    "Frequency of bowel movements", "Gamma glutamyl transferase levels", "Gene COMT", "Gene MTHFR", 
    "Gene MTR", "Gene MTRR", "Hair color", "Hair texture", "Heat production in response to cold", 
    "Height Short statureHLA-B27 antigen", "Insomnia", "Intensity of itching due to mosquito bites", 
    "Left-handedness (left lateral)", "Liver iron levels", "Lymphocyte count", "Male baldness", 
    "Mental agility", "Metabolizer profile CYP2C19", "Metabolizer profile CYP2C9", 
    "Metabolizer profile CYP2D6", "Metabolizer profile CYP3A5", "Monocyte count", 
    "Morning circadian rythm (Morning person)", "Mouth ulcers", "Nasion prominence", "Neuroticisms", 
    "Neutrophil count", "Nicotine dependence after prolonged consumption", "Permanent tooth eruption", 
    "Persistence of fetal hemoglobin", "Photic sneeze reflex", "Pigmented rings on the iris", 
    "Probability of having red hair", "Probability of snoring", "PSA (Prostate Specific Antigen)", 
    "QT Intervals", "Red blood cell count", "Resistin levels", "Resting heart rate", "Risk tendency", 
    "Secretor status and ABH antigens (FUT2 gene)", "Selectin E levels", "Serum albumin levels", 
    "Sex hormone regulation (SHBG)", "Skin melanin levels", "Sleep duration", 
    "Smell Reduced ability to perceive floral aroma", "Spleen volume", "Telomere length", 
    "Thyroid function (TSH levels)", "Total serum protein levels", "Usual walking pace", "White blood cell count"
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
    "Abdominal aortic aneurysm", "Abdominal hernia", "Actinic keratosis", "Addison's disease", 
    "Adolescent idiopathic scoliosis", "Age-related hearing impairment", "Age-related macular degeneration", 
    "Allergic rhinitis", "Alzheimer's disease", "Amyotrophic lateral sclerosis", "Angina pectoris", 
    "Anxiety", "Arterial hypertension", "Asthma", "Atopic dermatitis", "Atrial fibrillation", 
    "Barrett's esophagus", "Basal cell carcinoma", "Benign prostatic hyperplasia", "Bipolar disorder"
];

const pharmaTestNames = [
    "Warfarin", "Clopidogrel", "Simvastatin", "Atorvastatin", "Metformin", "Omeprazole", 
    "Tramadol", "Codeine", "Tamoxifen", "Azathioprine", "Mercaptopurine", "Irinotecan", 
    "Fluorouracil", "Capecitabine", "Carbamazepine", "Phenytoin", "Valproic acid", "Amitriptyline", 
    "Sertraline", "Escitalopram", "Bupropion", "Atomoxetine", "Methylphenidate", "Atomoxetine"
];

document.addEventListener('DOMContentLoaded', () => {
    // Check if we have patient data from localStorage OR URL parameters
    let patientData = localStorage.getItem('patientData');
    let patientId = null;
    
    // If no localStorage data, check URL parameters
    if (!patientData) {
        const urlParams = new URLSearchParams(window.location.search);
        patientId = urlParams.get('id');
        
        if (patientId) {
            // Fetch patient data from API using the ID
            fetchPatientDataFromAPI(patientId);
            return; // Exit early, data will be loaded asynchronously
        }
    }
    
    if (patientData) {
        try {
            const data = JSON.parse(patientData);
            
            // Update the header with patient information
            updatePatientHeader(data);
            
            // Wait a bit for main_user_page.js to populate the parameter lists
            setTimeout(() => {
                // Check if lists are populated
                const wellnessList = document.getElementById('wellness-list');
                const traitsList = document.getElementById('traits-list');
                const monogenicList = document.getElementById('monogenic-list');
                const complexList = document.getElementById('complex-list');
                const pharmaList = document.getElementById('pharma-list');
                
                // Process and display the test results
                processPatientResults(data.results);
                
                // Clear the data from localStorage
                localStorage.removeItem('patientData');
                
                // Setup download button functionality
                setupDownloadButton(data);
            }, 2000); // Wait 2 seconds for lists to populate
            
        } catch (error) {
        }
    }
});

// Function to update the patient header
function updatePatientHeader(patientData) {
    // Update patient name
    const patientNameSpan = document.getElementById('patient-name');
    if (patientNameSpan) {
        patientNameSpan.textContent = patientData.name;
    }
    
    // Update patient ID
    const patientIdSpan = document.getElementById('patient-id');
    if (patientIdSpan) {
        patientIdSpan.textContent = patientData.id;
    }
    
    // Update patient phone
    const patientPhoneSpan = document.getElementById('patient-phone');
    if (patientPhoneSpan) {
        patientPhoneSpan.textContent = patientData.phone;
    }
    
    // Update report date
    const reportDateSpan = document.getElementById('report-date');
    if (reportDateSpan) {
        reportDateSpan.textContent = new Date().toLocaleDateString();
    }
}

// Function to fetch patient data from API
async function fetchPatientDataFromAPI(patientId) {
    try {
        // Fetch patient info
        const patientResponse = await fetch(`https://www.codex.somee.com/api/Codex/GetAllPatients`);
        if (!patientResponse.ok) {
            throw new Error(`Failed to fetch patients: ${patientResponse.status}`);
        }
        
        const patients = await patientResponse.json();
        const patient = patients.find(p => p.id == patientId);
        
        if (!patient) {
            throw new Error('Patient not found');
        }
        
        // Fetch patient test results
        const resultsResponse = await fetch(`https://www.codex.somee.com/api/Codex/GetAllTestResults/${patientId}`);
        if (!resultsResponse.ok) {
            throw new Error(`Failed to fetch results: ${resultsResponse.status}`);
        }
        
        const resultsData = await resultsResponse.json();
        
        // Create patient data object
        const patientData = {
            id: patient.id,
            name: patient.name,
            phone: patient.phoneNumber || patient.phone,
            results: resultsData
        };
        
        // Update the header with patient information
        updatePatientHeader(patientData);
        
        // Wait a bit for main_user_page.js to populate the parameter lists
        setTimeout(() => {
            // Check if lists are populated
            const wellnessList = document.getElementById('wellness-list');
            const traitsList = document.getElementById('traits-list');
            const monogenicList = document.getElementById('monogenic-list');
            const complexList = document.getElementById('complex-list');
            const pharmaList = document.getElementById('pharma-list');
            
            // Check if lists exist
            const isMobile = window.innerWidth <= 768;
            
            // Process and display the test results
            processPatientResults(patientData.results);
            
            // Setup download button functionality
            setupDownloadButton(patientData);
        }, 2000); // Wait 2 seconds for lists to populate
        
    } catch (error) {
        // Show error message to user
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.innerHTML = `
                <div class="text-center p-8">
                    <div class="text-red-500 mb-4">
                        <i data-lucide="alert-circle" class="w-16 h-16 mx-auto"></i>
                    </div>
                    <h2 class="text-2xl font-bold text-gray-800 mb-2">Error Loading Patient Data</h2>
                    <p class="text-gray-600 mb-4">${error.message}</p>
                    <button onclick="window.history.back()" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        Go Back
                    </button>
                </div>
            `;
        }
    }
}

// Function to process patient test results
function processPatientResults(resultsData) {
    try {
        const isMobile = window.innerWidth <= 768;
        
        // Handle different possible API response structures
        let testsArray = null;
        
        if (resultsData.tests) {
            testsArray = resultsData.tests;
        } else if (resultsData.data && resultsData.data.tests) {
            testsArray = resultsData.data.tests;
        } else if (Array.isArray(resultsData)) {
            testsArray = resultsData;
        }
        
        
        if (!testsArray || testsArray.length === 0) {
            return;
        }
        
        // Process each test and update the corresponding parameter lists
        testsArray.forEach((test, index) => {
            const testType = extractTestType(test);
            const results = extractResults(test);
            
            
            if (testType && results) {
                updateParameterList(testType, results);
            }
        });
        
    } catch (error) {
    }
}

// Function to extract test type from test object
function extractTestType(test) {
    
    // Try different possible structures
    if (test.TestType) {
        if (typeof test.TestType === 'string') return test.TestType;
        if (typeof test.TestType === 'object') return test.TestType.name || 'Unknown Test';
    }
    if (test.testType) {
        if (typeof test.testType === 'string') return test.testType;
        if (typeof test.testType === 'object') return test.testType.name || 'Unknown Test';
    }
    if (test.Name) return test.Name;
    if (test.name) return test.name;
    if (typeof test === 'string') return test;
    
    // If we can't determine the type, try to infer from the data structure
    if (test.Results) {
        // Check if results contain wellness-related parameters
        const results = extractResults(test);
        if (results && typeof results === 'object') {
            const keys = Object.keys(results);
            
            // Check each test type with more flexible matching
            const wellnessMatch = keys.some(key => 
                wellnessTestNames.some(testName => 
                    testName.toLowerCase().includes(key.toLowerCase()) || 
                    key.toLowerCase().includes(testName.toLowerCase())
                )
            );
            
            const traitsMatch = keys.some(key => 
                traitsTestNames.some(testName => 
                    testName.toLowerCase().includes(key.toLowerCase()) || 
                    key.toLowerCase().includes(testName.toLowerCase())
                )
            );
            
            const monogenicMatch = keys.some(key => 
                monogenicTestNames.some(testName => 
                    testName.toLowerCase().includes(key.toLowerCase()) || 
                    key.toLowerCase().includes(testName.toLowerCase())
                )
            );
            
            const complexMatch = keys.some(key => 
                complexTestNames.some(testName => 
                    testName.toLowerCase().includes(key.toLowerCase()) || 
                    key.toLowerCase().includes(testName.toLowerCase())
                )
            );
            
            const pharmaMatch = keys.some(key => 
                pharmaTestNames.some(testName => 
                    testName.toLowerCase().includes(key.toLowerCase()) || 
                    key.toLowerCase().includes(testName.toLowerCase())
                )
            );
            
            
            if (wellnessMatch) return 'Wellness';
            if (traitsMatch) return 'Traits';
            if (monogenicMatch) return 'Monogenic';
            if (complexMatch) return 'Complex';
            if (pharmaMatch) return 'Pharma';
        }
    }
    
    return 'Wellness'; // Default fallback
}

// Function to extract results from test object
function extractResults(test) {
    let results = null;
    
    if (test.Results) {
        try {
            results = JSON.parse(test.Results);
        } catch (e) {
            results = test.Results; // If it's already parsed
        }
    } else if (test.results) {
        try {
            results = JSON.parse(test.results);
        } catch (e) {
            results = test.results;
        }
    }
    
    return results;
}



// Function to update parameter list with patient results
function updateParameterList(testType, results) {
    
    // Map test types to the corresponding parameter lists
    const testTypeMapping = {
        'Wellness': 'wellness-list',
        'Traits': 'traits-list',
        'Monogenic': 'monogenic-list',
        'Complex': 'complex-list',
        'Pharma': 'pharma-list'
    };
    
    const listId = testTypeMapping[testType];
    if (!listId) {
        return;
    }
    
    const listContainer = document.getElementById(listId);
    if (!listContainer) {
        return;
    }
    
    // Update the parameter items with patient results
    updateParameterItems(listContainer, results, testType);
}

// Function to update parameter items with patient results
function updateParameterItems(listContainer, results, testType) {
    const parameterItems = listContainer.querySelectorAll('.parameter-item');
    
    if (parameterItems.length === 0) {
        // Check if the lists have been populated by main_user_page.js
    }
    
    if (testType === 'Pharma') {
        // Handle pharmacogenomics results
        updatePharmaParameters(parameterItems, results);
    } else {
        // Handle standard test results
        updateStandardParameters(parameterItems, results);
    }
}

// Function to update standard parameters
function updateStandardParameters(parameterItems, results) {
    
    parameterItems.forEach((item, index) => {
        const parameterName = item.textContent.trim();
        
        // Check if we have results for this parameter
        if (results && typeof results === 'object') {
            // Try exact match first
            let resultValue = results[parameterName];
            let matchedKey = parameterName;
            
            
            // If no exact match, try case-insensitive match
            if (!resultValue) {
                const lowerParamName = parameterName.toLowerCase();
                for (const key in results) {
                    if (key.toLowerCase() === lowerParamName) {
                        resultValue = results[key];
                        matchedKey = key;
                        break;
                    }
                }
            }
            
            // If still no match, try partial match
            if (!resultValue) {
                const lowerParamName = parameterName.toLowerCase();
                for (const key in results) {
                    if (key.toLowerCase().includes(lowerParamName) || 
                        lowerParamName.includes(key.toLowerCase())) {
                        resultValue = results[key];
                        matchedKey = key;
                        break;
                    }
                }
            }
            
            // If still no match, try removing spaces and special characters
            if (!resultValue) {
                const cleanParamName = parameterName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
                for (const key in results) {
                    const cleanKey = key.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
                    if (cleanKey === cleanParamName) {
                        resultValue = results[key];
                        matchedKey = key;
                        break;
                    }
                }
            }
            
            
            if (resultValue) {
                // Add result indicator
                addResultIndicator(item, resultValue);
                // Add visual styling
                item.classList.add('has-results');
                
                // Store the result data for later use
                item.dataset.resultValue = resultValue;
            } else {
            }
        } else {
        }
    });
    
}

// Function to update pharmacogenomics parameters
function updatePharmaParameters(parameterItems, results) {
    if (!Array.isArray(results)) return;
    
    parameterItems.forEach(item => {
        const parameterName = item.textContent.trim();
        
        // Find matching result
        const result = results.find(r => r.name === parameterName);
        if (result) {
            // Add result indicator
            addResultIndicator(item, result.result, result.action);
            // Add visual styling
            item.classList.add('has-results');
        }
    });
}

// Function to add result indicator to parameter item
function addResultIndicator(item, resultValue, action = null) {
    
    // Store the original parameter name BEFORE adding result indicator
    if (!item.dataset.originalName) {
        item.dataset.originalName = item.textContent.trim();
    }
    
    // Remove existing result indicator if any
    const existingIndicator = item.querySelector('.result-indicator');
    if (existingIndicator) {
        existingIndicator.remove();
    }
    
    // Create result indicator - simplified without "Result Available" text
    const indicator = document.createElement('div');
    indicator.className = 'result-indicator mt-2 p-2 bg-green-50 border border-green-200 rounded text-sm';
    
    if (action) {
        // For pharmacogenomics
        const actionIcon = getActionIcon(action);
        indicator.innerHTML = `
            <div class="flex items-center text-green-700">
                ${actionIcon}
                <span class="ml-2 font-medium">${resultValue}</span>
            </div>
        `;
    } else {
        // For standard tests
        indicator.innerHTML = `
            <div class="text-green-700 font-medium">${resultValue}</div>
        `;
    }
    
    item.appendChild(indicator);
    
    // Store the result data for later use
    item.dataset.resultValue = resultValue;
    if (action) item.dataset.action = action;
    
    // Also store the result data in a global map for easy access
    const parameterName = item.dataset.originalName;
    if (!window.patientResultsMap) {
        window.patientResultsMap = new Map();
    }
    window.patientResultsMap.set(parameterName, { result: resultValue, action: action });
    
    
    // Update the lifestyle recommendations tables if they exist
    if (window.populateTraitsRecommendationsTableWithResults && window.populateWellnessRecommendationsTableWithResults) {
        setTimeout(() => {
            window.populateTraitsRecommendationsTableWithResults();
            window.populateWellnessRecommendationsTableWithResults();
        }, 500);
    }
    
    // Don't add click handler here - let the original main_user_page.js handle it
    // We'll modify the displayDetails function instead
}

// Function to get action icon for pharmacogenomics
function getActionIcon(action) {
    if (action && action.toLowerCase().includes('dosage')) {
        return '<i data-lucide="pill" class="w-4 h-4 text-blue-600"></i>';
    } else if (action && action.toLowerCase().includes('adverse')) {
        return '<i data-lucide="alert-triangle" class="w-4 h-4 text-red-600"></i>';
    } else if (action && action.toLowerCase().includes('efficacy')) {
        return '<i data-lucide="check-circle" class="w-4 h-4 text-green-600"></i>';
    }
    return '<i data-lucide="activity" class="w-4 h-4 text-gray-600"></i>';
}

// Function to show results in details panel
function showResultsInDetails(item, resultValue, action = null) {
    // Find the details container for this tab
    const tabId = getCurrentActiveTab();
    const detailsContainer = document.getElementById(`${tabId}-details`);
    
    if (!detailsContainer) return;
    
    // Get the parameter name
    const parameterName = item.textContent.replace(/Result Available.*/s, '').trim();
    
    // Find the parameter data from the appropriate data array
    let parameterData = null;
    let dataArray = null;
    
    switch (tabId) {
        case 'wellness':
            dataArray = window.wellnessData;
            break;
        case 'traits':
            dataArray = window.traitsData;
            break;
        case 'monogenic':
            dataArray = window.monogenicData;
            break;
        case 'complex':
            dataArray = window.complexData;
            break;
        case 'pharma':
            dataArray = window.pharmaData;
            break;
    }
    
    if (dataArray) {
        parameterData = dataArray.find(param => param.name === parameterName);
    }
    
    // Create enhanced details content with results and full parameter data
    let detailsHTML = `
        <div class="space-y-4">
            <h3 class="text-xl font-bold text-gray-800">${parameterName}</h3>
            
            <!-- Results Section -->
            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 class="font-semibold text-green-800 flex items-center mb-2">
                    <i data-lucide="check-circle" class="w-4 h-4 mr-2"></i>
                    Your Result
                </h4>
                <div class="text-green-700 text-center">
                    ${action ? `<p class="mb-2 text-lg">${action}</p>` : ''}
                    <p class="text-xl font-semibold">${resultValue}</p>
                </div>
                
                <!-- Picture-based Visual Representation for Results -->
                ${getPictureVisualForResults(getCurrentActiveTab(), resultValue)}
            </div>
            
            <!-- Parameter Definition -->
            ${parameterData && parameterData.definition ? `
                <div class="info-box">
                    <h4 class="font-semibold text-green-800 flex items-center mb-2">
                        <i data-lucide="info" class="w-4 h-4 mr-2"></i>
                        Definition
                    </h4>
                    <p class="text-gray-600 text-sm">${parameterData.definition}</p>
                </div>
            ` : ''}
            
            ${(getCurrentActiveTab() === 'pharma' && parameterData && parameterData.action) ? `
            <div class="info-box">
                <h4 class="font-semibold text-green-800 flex items-center mb-2">
                    <i data-lucide="activity" class="w-4 h-4 mr-2"></i>
                    Action
                </h4>
                <div class="text-gray-700 text-sm">
                    ${parameterData.action}
                </div>
            </div>
            ` : ''}
            
            <!-- Parameter Metadata -->
            ${parameterData ? `
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center pt-4">
                    <div>
                        <p class="text-xs text-gray-500">Number of observed variants</p>
                        <p class="font-bold text-lg text-green-700">${parameterData.variants || '--'}</p>
                    </div>
                    <div>
                        <p class="text-xs text-gray-500">Number of risk loci</p>
                        <p class="font-bold text-lg text-green-700">${parameterData.loci || '--'}</p>
                    </div>
                    <div>
                        <p class="text-xs text-gray-500">Genes analyzed</p>
                        <p class="font-bold text-lg text-green-700">${parameterData.genes || '--'}</p>
                    </div>
                </div>
            ` : ''}
            
            <!-- Bibliography -->
            ${parameterData && parameterData.bibliography && parameterData.bibliography.length > 0 ? `
                <div class="pt-4 mt-4 border-t border-gray-200">
                    <h4 class="font-semibold text-gray-600 flex items-center mb-2 text-sm">
                        <i data-lucide="book-open" class="w-4 h-4 mr-2"></i>
                        Bibliography
                    </h4>
                    <ul class="list-disc list-inside space-y-1">
                        ${parameterData.bibliography.map(ref => `<li class="text-xs text-gray-500">${ref}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
    `;
    
    detailsContainer.innerHTML = detailsHTML;
    
    // Re-render Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Function to get current active tab
function getCurrentActiveTab() {
    const activeTab = document.querySelector('.tab-active');
    if (activeTab) {
        return activeTab.dataset.tab;
    }
    return 'traits'; // Default fallback
}

// Function to get picture-based visual representation for results
function getPictureVisualForResults(testType, resultValue) {
    let visualHTML = '';
    
    if (testType === 'complex' || testType === 'wellness' || testType === 'traits') {
        // Bell curve images for Complex, Wellness, and Traits
        const lowerResult = resultValue.toLowerCase();
        let imagePath = '';
        let altText = '';
        
        if (lowerResult.includes('low') || lowerResult.includes('decreased') || lowerResult.includes('reduced')) {
            imagePath = '../curves&pics/Low 2.png';
            altText = 'Low/Favorable Result';
        } else if (lowerResult.includes('average') || lowerResult.includes('medium') || lowerResult.includes('normal')) {
            imagePath = '../curves&pics/Average 2.png';
            altText = 'Average/Medium Result';
        } else if (lowerResult.includes('high') || lowerResult.includes('elevated') || lowerResult.includes('increased')) {
            imagePath = '../curves&pics/High 2.png';
            altText = 'High/Unfavorable Result';
        } else {
            imagePath = '../curves&pics/Not found 2.png';
            altText = 'Result Not Found';
        }
        
        visualHTML = `
            <div class="mt-4">
                <h5 class="font-semibold text-gray-700 mb-2 text-sm flex items-center">
                    <i data-lucide="bar-chart-3" class="w-4 h-4 mr-2"></i>
                    Results Distribution
                </h5>
                <div class="flex justify-center items-center bg-white rounded-lg border p-4 shadow-sm">
                    <img src="${imagePath}" alt="${altText}" class="w-full max-w-md mx-auto" 
                         onerror="this.src='../curves&pics/Not found 2.png';">
                </div>
            </div>
        `;
    } else if (testType === 'monogenic') {
        // Chromosome images for Monogenic
        const lowerResult = resultValue.toLowerCase();
        let imagePath = '';
        let altText = '';
        
        if (lowerResult.includes('variant present') || lowerResult.includes('positive') || lowerResult.includes('detected')) {
            imagePath = '../curves&pics/red chromosome.png';
            altText = 'Variant Present - Red Chromosome';
        } else {
            imagePath = '../curves&pics/green chromosome.png';
            altText = 'Variant Absent - Green Chromosome';
        }
        
        visualHTML = `
            <div class="mt-4">
                <h5 class="font-semibold text-gray-700 mb-2 text-sm flex items-center">
                    <i data-lucide="dna" class="w-4 h-4 mr-2"></i>
                    Genetic Variant Status
                </h5>
                <div class="flex justify-center items-center bg-white rounded-lg border p-4 shadow-sm">
                    <img src="${imagePath}" alt="${altText}" class="w-32 h-32 object-contain mx-auto">
                </div>
            </div>
        `;
    }
    
    return visualHTML;
}

// Function to download the Codex manual
function downloadCodexManual() {
    try {
        // Create a link element to trigger download
        const link = document.createElement('a');
        link.href = '../intro.pdf';
        link.download = 'Codex_Manual.pdf';
        link.style.display = 'none';
        
        // Add to DOM, click, and remove
        document.body.appendChild(link);
        
        // Add error handling for the link
        link.onerror = () => {
            document.body.removeChild(link);
            showDownloadError();
        };
        
        link.onload = () => {
            showDownloadSuccess();
        };
        
        // Try to trigger download
        link.click();
        
        // Remove link after a short delay
        setTimeout(() => {
            if (document.body.contains(link)) {
                document.body.removeChild(link);
            }
            showDownloadSuccess();
        }, 100);
        
    } catch (error) {
        showDownloadError();
    }
    
    function showDownloadSuccess() {
        const downloadBtn = document.getElementById('download-manual-btn');
        if (downloadBtn) {
            const originalText = downloadBtn.innerHTML;
            downloadBtn.innerHTML = `
                <i data-lucide="check" class="w-6 h-6"></i>
                <span class="font-semibold text-base">Downloaded!</span>
            `;
            downloadBtn.classList.remove('from-blue-600', 'via-blue-700', 'to-indigo-700');
            downloadBtn.classList.add('from-green-600', 'via-green-700', 'to-emerald-700');
            
            // Reset after 2 seconds
            setTimeout(() => {
                downloadBtn.innerHTML = originalText;
                downloadBtn.classList.remove('from-green-600', 'via-green-700', 'to-emerald-700');
                downloadBtn.classList.add('from-blue-600', 'via-blue-700', 'to-indigo-700');
                lucide.createIcons();
            }, 2000);
        }
    }
    
    function showDownloadError() {
        const downloadBtn = document.getElementById('download-manual-btn');
        if (downloadBtn) {
            const originalText = downloadBtn.innerHTML;
            downloadBtn.innerHTML = `
                <i data-lucide="x" class="w-6 h-6"></i>
                <span class="font-semibold text-base">Failed</span>
            `;
            downloadBtn.classList.remove('from-blue-600', 'via-blue-700', 'to-indigo-700');
            downloadBtn.classList.add('from-red-600', 'via-red-700', 'to-red-800');
            
            // Reset after 2 seconds
            setTimeout(() => {
                downloadBtn.innerHTML = originalText;
                downloadBtn.classList.remove('from-red-600', 'via-red-700', 'to-red-800');
                downloadBtn.classList.add('from-blue-600', 'via-blue-700', 'to-indigo-700');
                lucide.createIcons();
            }, 2000);
        }
        alert('Failed to download manual. The file may not be available.');
    }
}

// Function to setup download button functionality
function setupDownloadButton(patientData) {
    const downloadBtn = document.getElementById('download-results-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            downloadPatientResults(patientData);
        });
    }
}

// Function to load jsPDF library dynamically
async function loadJSPDF() {
    return new Promise((resolve, reject) => {
        if (window.jspdf) {
            resolve();
            return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        script.onload = () => {
            // Also load autoTable plugin
            const autoTableScript = document.createElement('script');
            autoTableScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.31/jspdf.plugin.autotable.min.js';
            autoTableScript.onload = () => resolve();
            autoTableScript.onerror = () => reject(new Error('Failed to load autoTable plugin'));
            document.head.appendChild(autoTableScript);
        };
        script.onerror = () => reject(new Error('Failed to load jsPDF library'));
        document.head.appendChild(script);
    });
}

// Function to download patient results as PDF
async function downloadPatientResults(patientData) {
    const downloadBtn = document.getElementById('download-results-btn');
    
    // Show loading state
    if (downloadBtn) {
        downloadBtn.disabled = true;
        downloadBtn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Generating PDF...';
    }
    
    try {
        // Check if jsPDF is available, if not, load it dynamically
        if (typeof window.jspdf === 'undefined') {
            // Try to load jsPDF dynamically
            await loadJSPDF();
            
            // Check again after loading
            if (typeof window.jspdf === 'undefined') {
                alert('PDF generation library could not be loaded. Please refresh the page and try again.');
            if (downloadBtn) {
                downloadBtn.disabled = false;
                downloadBtn.innerHTML = '<i data-lucide="download" class="w-4 h-4"></i><span>Download Results</span>';
            }
            return;
            }
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        
        // Set document properties
        doc.setProperties({
            title: `Genetic Analysis Report - ${patientData.name}`,
            subject: 'Patient Test Results',
            author: 'Codex Genetic Analysis',
            creator: 'Codex System'
        });

        // Clean, professional header
        doc.setFillColor(34, 139, 34);
        doc.rect(0, 0, 210, 25, 'F');
        doc.setFontSize(20);
        doc.setTextColor(255, 255, 255);
        doc.text('Codex Genetic Analysis Report', 105, 17, { align: 'center' });

        let yPosition = 40;

        // Patient Information Section
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text('Patient Information', 20, yPosition);
        yPosition += 10;

        // Use autoTable for patient info to ensure proper alignment
        doc.autoTable({
            startY: yPosition,
            body: [
                ['Name:', patientData.name],
                ['ID:', patientData.id]
            ],
            theme: 'plain',
            styles: {
                fontSize: 12,
                cellPadding: 2,
                lineColor: [255, 255, 255], // Invisible borders
                lineWidth: 0
            },
            columnStyles: {
                0: { cellWidth: 30, halign: 'left' }, // Label column
                1: { cellWidth: 140, halign: 'left' }  // Value column
            }
        });
        
        yPosition = doc.autoTable.previous.finalY + 10;

        // Test Results Section Header
        doc.setFontSize(16);
        doc.setTextColor(34, 139, 34);
        doc.text('Test Results Summary', 20, yPosition);
        yPosition += 15;
        
        // Process each test type with clean, organized tables
        const testTypes = [
            { name: 'Wellness', listId: 'wellness-list', color: [34, 197, 94] },
            { name: 'Traits', listId: 'traits-list', color: [59, 130, 246] },
            { name: 'Familial Genetic Conditions', listId: 'monogenic-list', color: [147, 51, 234] },
            { name: 'Genetic Susceptibility to Health Disorders', listId: 'complex-list', color: [239, 68, 68] },
            { name: 'Pharma', listId: 'pharma-list', color: [245, 158, 11] }
        ];
        
        testTypes.forEach(testType => {
            const listContainer = document.getElementById(testType.listId);
            
            if (listContainer) {
                const parameterItems = listContainer.querySelectorAll('.parameter-item');
                const itemsWithResults = Array.from(parameterItems).filter(item => 
                    item.classList.contains('has-results')
                );
                
                if (itemsWithResults.length > 0) {
                    // Check if we need a new page
                    if (yPosition > 200) {
                        doc.addPage();
                        yPosition = 30;
                    }
                    
                    // Add test type header
                    doc.setFontSize(16);
                    doc.setTextColor(testType.color[0], testType.color[1], testType.color[2]);
                    doc.text(`${testType.name} Results`, 20, yPosition);
                    yPosition += 10;
                    
                    // Prepare data for autoTable
                    const tableData = itemsWithResults.map(item => {
                            let parameterName = item.dataset.originalName;
                            if (!parameterName) {
                                parameterName = item.textContent
                                    .replace(/Result Available[\s\S]*/i, '')
                                    .trim();
                            }
                            
                            const resultValue = item.dataset.resultValue || 'N/A';
                            const action = item.dataset.action || null;
                            
                            // Clean up the result value
                            let cleanResult = resultValue;
                            if (typeof resultValue === 'string') {
                                cleanResult = resultValue
                                    .replace(/Result Available/gi, '')
                                    .replace(/Result:\s*/gi, '')
                                    .replace(/\s+/g, ' ')
                                    .trim();
                            }
                            
                            // Add action if available
                            if (action) {
                                cleanResult = `${action}: ${cleanResult}`;
                            }
                            
                        return [parameterName, cleanResult];
                    });
                    
                    // Use autoTable for clean, professional formatting
                    doc.autoTable({
                        startY: yPosition,
                        head: [['Parameter', 'Result']],
                        body: tableData,
                        didDrawPage: (data) => { data.settings.margin.top = 30; },
                        margin: { top: 30 },
                        theme: 'grid',
                        headStyles: { 
                            fillColor: testType.color, 
                            textColor: 255,
                            fontSize: 10
                        },
                        alternateRowStyles: { 
                            fillColor: [248, 250, 252] 
                        },
                        didParseCell: (data) => { 
                            if (data.section === 'head') {
                                data.cell.styles.fontStyle = 'bold';
                            }
                            if (data.section === 'body') {
                                data.cell.styles.fontSize = 9;
                                data.cell.styles.cellPadding = 3;
                            }
                        },
                        columnStyles: {
                            0: { cellWidth: 100 }, // Parameter column
                            1: { cellWidth: 70 }   // Result column
                        }
                    });
                    
                    yPosition = doc.autoTable.previous.finalY + 15;
                }
            }
        });
        

        
        // Clean footer
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(8).setTextColor(150).text(`Page ${i} of ${pageCount}`, 105, 285, { align: 'center' });
        }
        
        // Download the results PDF
        
        // Download the results PDF
        const fileName = `Codex_Report_${patientData.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
        
        // Create blob and download
        const pdfBytes = doc.output('arraybuffer');
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        
        // Show success message to user
        alert('✅ Results PDF downloaded successfully!\n\n' + fileName);
        
        
        // Reset button state
        if (downloadBtn) {
            downloadBtn.disabled = false;
            downloadBtn.innerHTML = '<i data-lucide="download" class="w-4 h-4"></i><span>Download Results</span>';
        }
        
    } catch (error) {
        alert('Error generating PDF. Please try again.');
        
        // Reset button state on error
        if (downloadBtn) {
            downloadBtn.disabled = false;
            downloadBtn.innerHTML = '<i data-lucide="download" class="w-4 h-4"></i><span>Download Results</span>';
        }
    }
}

    // Function to load jsPDF dynamically
    async function loadJSPDF() {
        return new Promise((resolve, reject) => {
            if (window.jspdf) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
            script.onload = () => {
                // Try different ways the library might be exposed
                if (window.jspdf) {
                } else if (window.jspdf && window.jspdf.jsPDF) {
                    window.jspdf = window.jspdf.jsPDF;
                } else if (window.jsPDF) {
                    window.jspdf = window.jsPDF;
                } else {
                    // Sometimes the library needs a moment to initialize
                    setTimeout(() => {
                        if (window.jspdf) {
                        } else if (window.jsPDF) {
                            window.jspdf = window.jsPDF;
                        } else {
                        }
                        resolve();
                    }, 100);
                    return;
                }
                resolve();
            };
            script.onerror = (error) => {
                reject(error);
            };
            document.head.appendChild(script);
        });
    }

    // Function to load pdf-lib for PDF merging
    async function loadPDFLib() {
        return new Promise((resolve, reject) => {
            if (window.PDFLib) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js';
            script.onload = () => {
                resolve();
            };
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // Function to add intro pages from Codex Booklet 7.pdf
    async function addIntroPagesToPDF(doc) {
        try {
            // Load pdf-lib if not already loaded
            await loadPDFLib();
            
            // Check if PDFLib is actually available
            if (typeof window.PDFLib === 'undefined') {
                throw new Error('PDFLib library failed to load');
            }
            
            // Try multiple paths to find the intro PDF
            let response;
            let introPDFBytes;
            
            // Get the current page URL to determine base path
            const currentUrl = window.location.href;
            const baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
            const rootUrl = baseUrl.substring(0, baseUrl.lastIndexOf('/'));
            
            
            // Try different possible paths - prioritize the actual file location
            const possiblePaths = [
                // Try the actual file location first
                `${window.location.origin}/Codex Booklet 7.pdf`,
                `${window.location.origin}/Codex%20Booklet%207.pdf`,
                // Try relative paths from current location
                '../Codex Booklet 7.pdf',
                '../Codex%20Booklet%207.pdf',
                '../../Codex Booklet 7.pdf',
                '../../Codex%20Booklet%207.pdf',
                // Try absolute paths
                '/Codex Booklet 7.pdf',
                '/Codex%20Booklet%207.pdf',
                // Try dynamic paths
                `${rootUrl}/Codex Booklet 7.pdf`,
                `${rootUrl}/Codex%20Booklet%207.pdf`,
                `${baseUrl}/Codex Booklet 7.pdf`,
                `${baseUrl}/Codex%20Booklet%207.pdf`,
                // Try current directory
                './Codex Booklet 7.pdf',
                './Codex%20Booklet%207.pdf',
                'Codex Booklet 7.pdf',
                'Codex%20Booklet%207.pdf'
            ];
            
            // Try to fetch the intro PDF from different paths
            for (const path of possiblePaths) {
                try {
                    response = await fetch(path);
                    
                    if (response.ok) {
                        introPDFBytes = await response.arrayBuffer();
                        break;
                    } else {
                    }
                } catch (e) {
                    continue;
                }
            }
            
            if (!introPDFBytes) {
                
                // Create intro pages directly with jsPDF instead of merging
                return await createIntroPagesWithJSPDF(doc);
            }
        
                    // Load the intro PDF
            const introPDF = await PDFLib.PDFDocument.load(introPDFBytes);
            const introPages = introPDF.getPages();
            
            // Create a new PDF document for merging
            const mergedPDF = await PDFLib.PDFDocument.create();
            
            // Add all intro pages first
            for (let i = 0; i < introPages.length; i++) {
                const [copiedPage] = await mergedPDF.copyPages(introPDF, [i]);
                mergedPDF.addPage(copiedPage);
            }
        
                    // Convert jsPDF document to PDF-lib format
            const jsPDFBytes = doc.output('arraybuffer');
            const jsPDFDoc = await PDFLib.PDFDocument.load(jsPDFBytes);
            const jsPDFPages = jsPDFDoc.getPages();
            
            // Add all jsPDF pages
            for (let i = 0; i < jsPDFPages.length; i++) {
                const [copiedPage] = await mergedPDF.copyPages(jsPDFDoc, [i]);
                mergedPDF.addPage(copiedPage);
            }
        
                    // Save the merged PDF
            const mergedBytes = await mergedPDF.save();
            
            return mergedBytes;
        
            } catch (error) {
            // If merging fails, return the original jsPDF document
            return doc.output('arraybuffer');
        }
    }

    // Function to create intro pages directly with jsPDF when external PDF is not available
    async function createIntroPagesWithJSPDF(doc) {
        try {
            
            // Ensure jsPDF is available
            if (typeof window.jspdf === 'undefined') {
                await loadJSPDF();
            }
            
            // Check if jsPDF is now available
            if (typeof window.jspdf === 'undefined') {
                throw new Error('Failed to load jsPDF library');
            }
            
            let jsPDF;
            try {
                const { jsPDF: jsPDFConstructor } = window.jspdf;
                jsPDF = jsPDFConstructor;
            } catch (e) {
                jsPDF = window.jspdf.jsPDF || window.jspdf;
            }
            
            
            if (typeof jsPDF !== 'function') {
                throw new Error(`jsPDF constructor is not a function: ${typeof jsPDF}`);
            }
            
            // Create a new document with intro pages
            const introDoc = new jsPDF();
            
            // Add intro page 1 - Title page
            introDoc.setFillColor(34, 139, 34); // Green background
            introDoc.rect(0, 0, 210, 297, 'F');
            
            introDoc.setFontSize(36);
            introDoc.setTextColor(255, 255, 255);
            introDoc.text('CODEX', 105, 120, { align: 'center' });
            
            introDoc.setFontSize(24);
            introDoc.text('Genetic Analysis System', 105, 150, { align: 'center' });
            
            introDoc.setFontSize(16);
            introDoc.text('Comprehensive Health & Wellness Report', 105, 180, { align: 'center' });
            
            introDoc.setFontSize(12);
            introDoc.text('Powered by Advanced Genetic Technology', 105, 220, { align: 'center' });
            
            introDoc.setFontSize(10);
            introDoc.text(new Date().toLocaleDateString(), 105, 250, { align: 'center' });
            
            // Add intro page 2 - Information page
            introDoc.addPage();
            introDoc.setFillColor(248, 250, 252); // Light gray background
            introDoc.rect(0, 0, 210, 297, 'F');
            
            introDoc.setFontSize(20);
            introDoc.setTextColor(34, 139, 34);
            introDoc.text('About This Report', 105, 40, { align: 'center' });
            
            introDoc.setFontSize(12);
            introDoc.setTextColor(0, 0, 0);
            
            const aboutText = [
                'This comprehensive genetic analysis report provides detailed insights into your:',
                '',
                '• Wellness Parameters - Optimize your health and fitness',
                '• Personal Traits - Understand your genetic characteristics',
                '• Health Predispositions - Learn about genetic risk factors',
                '• Medication Response - Discover how your genes affect drug metabolism',
                '• Lifestyle Recommendations - Personalized advice based on your genetics',
                '',
                'All results are based on advanced genetic testing and analysis.',
                'Please consult with healthcare professionals for medical decisions.'
            ];
            
            let yPos = 80;
            aboutText.forEach(line => {
                if (line.trim() === '') {
                    yPos += 10;
                } else {
                    introDoc.text(line, 20, yPos);
                    yPos += 20;
                }
            });
            
            // Add intro page 3 - Methodology
            introDoc.addPage();
            introDoc.setFillColor(248, 250, 252);
            introDoc.rect(0, 0, 210, 297, 'F');
            
            introDoc.setFontSize(20);
            introDoc.setTextColor(34, 139, 34);
            introDoc.text('Methodology & Technology', 105, 40, { align: 'center' });
            
            introDoc.setFontSize(12);
            introDoc.setTextColor(0, 0, 0);
            
            const methodText = [
                'Our genetic analysis utilizes cutting-edge technology:',
                '',
                '• Next-Generation Sequencing (NGS)',
                '• Advanced Bioinformatics Analysis',
                '• Clinically Validated Genetic Markers',
                '• Machine Learning Algorithms',
                '• Continuous Research Updates',
                '',
                'Results are processed through multiple validation steps',
                'to ensure accuracy and reliability.',
                '',
                'This report represents the latest in genetic science',
                'and personalized medicine.'
            ];
            
            yPos = 80;
            methodText.forEach(line => {
                if (line.trim() === '') {
                    yPos += 10;
                } else {
                    introDoc.text(line, 20, yPos);
                    yPos += 20;
                }
            });
            
            // Now merge the intro pages with the original content
            const introBytes = introDoc.output('arraybuffer');
            
            // Convert both PDFs to PDF-lib format for merging
            return mergePDFsWithIntro(introBytes, doc.output('arraybuffer'));
            
        } catch (error) {
            // Fallback to original PDF
            return doc.output('arraybuffer');
        }
    }
    







