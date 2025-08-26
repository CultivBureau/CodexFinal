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
            console.error('Error processing patient data:', error);
        }
    }
});

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
            
            // Process and display the test results
            processPatientResults(patientData.results);
            
            // Setup download button functionality
            setupDownloadButton(patientData);
        }, 2000); // Wait 2 seconds for lists to populate
        
    } catch (error) {
        console.error('Error fetching patient data from API:', error);
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

// Function to process patient test results
function processPatientResults(resultsData) {
    try {
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
            
            console.log(`Test type: ${testType}, Results:`, results);
            console.log(`Results keys for ${testType}:`, results ? Object.keys(results) : 'No results');
            
            if (testType && results) {
                updateParameterList(testType, results);
            }
        });
        
    } catch (error) {
        console.error('Error processing patient results:', error);
    }
}

// Function to extract test type from test object
function extractTestType(test) {
    console.log('Extracting test type from:', test);
    
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
            console.log('Result keys for type inference:', keys);
            
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
            
            console.log('Type matches:', { wellnessMatch, traitsMatch, monogenicMatch, complexMatch, pharmaMatch });
            
            if (wellnessMatch) return 'Wellness';
            if (traitsMatch) return 'Traits';
            if (monogenicMatch) return 'Monogenic';
            if (complexMatch) return 'Complex';
            if (pharmaMatch) return 'Pharma';
        }
    }
    
    console.log('Could not determine test type, defaulting to Wellness');
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
    console.log(`Updating ${testType} with results:`, results);
    
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
        console.log(`Unknown test type: ${testType}`);
        return;
    }
    
    const listContainer = document.getElementById(listId);
    if (!listContainer) {
        console.log(`List container not found: ${listId}`);
        return;
    }
    
    // Update the parameter items with patient results
    updateParameterItems(listContainer, results, testType);
}

// Function to update parameter items with patient results
function updateParameterItems(listContainer, results, testType) {
    const parameterItems = listContainer.querySelectorAll('.parameter-item');
    console.log(`Found ${parameterItems.length} parameter items for ${testType}`);
    
    if (parameterItems.length === 0) {
        console.log('No parameter items found. Checking if lists are populated...');
        // Check if the lists have been populated by main_user_page.js
        console.log('List container HTML:', listContainer.innerHTML.substring(0, 200) + '...');
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
    console.log('=== UPDATING STANDARD PARAMETERS ===');
    console.log('Results object:', results);
    console.log('Parameter items found:', parameterItems.length);
    console.log('Available result keys:', Object.keys(results));
    
    parameterItems.forEach((item, index) => {
        const parameterName = item.textContent.trim();
        console.log(`\n--- Checking parameter ${index}: "${parameterName}" ---`);
        
        // Check if we have results for this parameter
        if (results && typeof results === 'object') {
            // Try exact match first
            let resultValue = results[parameterName];
            let matchedKey = parameterName;
            
            console.log(`  Exact match attempt: "${parameterName}" -> ${resultValue}`);
            
            // If no exact match, try case-insensitive match
            if (!resultValue) {
                const lowerParamName = parameterName.toLowerCase();
                for (const key in results) {
                    if (key.toLowerCase() === lowerParamName) {
                        resultValue = results[key];
                        matchedKey = key;
                        console.log(`  Case-insensitive match found: "${key}" -> ${resultValue}`);
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
                        console.log(`  Partial match found: "${key}" -> ${resultValue}`);
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
                        console.log(`  Clean match found: "${key}" -> ${resultValue}`);
                        break;
                    }
                }
            }
            
            console.log(`  Final result for "${parameterName}": ${resultValue} (matched with key: "${matchedKey}")`);
            
            if (resultValue) {
                console.log(`  ✓ Adding result indicator for "${parameterName}"`);
                // Add result indicator
                addResultIndicator(item, resultValue);
                // Add visual styling
                item.classList.add('has-results');
                
                // Store the result data for later use
                item.dataset.resultValue = resultValue;
            } else {
                console.log(`  ✗ No result found for "${parameterName}"`);
            }
        } else {
            console.log(`  ✗ No results object available for "${parameterName}"`);
        }
    });
    
    console.log('=== FINISHED UPDATING STANDARD PARAMETERS ===');
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
    console.log(`\n=== ADDING RESULT INDICATOR ===`);
    console.log(`Item:`, item);
    console.log(`Result value:`, resultValue);
    console.log(`Action:`, action);
    
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
    
    console.log(`✓ Stored original name: "${parameterName}"`);
    console.log(`✓ Stored result for "${parameterName}":`, { result: resultValue, action: action });
    console.log(`✓ Added result indicator to DOM element`);
    console.log(`✓ Updated dataset.resultValue:`, item.dataset.resultValue);
    console.log(`=== FINISHED ADDING RESULT INDICATOR ===\n`);
    
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
                    <img src="${imagePath}" alt="${altText}" class="w-full max-w-md mx-auto">
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

// Function to setup download button functionality
function setupDownloadButton(patientData) {
    const downloadBtn = document.getElementById('download-results-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            downloadPatientResults(patientData);
        });
    }
}

// Function to download patient results as PDF
function downloadPatientResults(patientData) {
    const downloadBtn = document.getElementById('download-results-btn');
    
    // Show loading state
    if (downloadBtn) {
        downloadBtn.disabled = true;
        downloadBtn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Generating PDF...';
    }
    
    try {
        // Check if jsPDF is available
        if (typeof window.jspdf === 'undefined') {
            alert('PDF generation library not loaded. Please refresh the page and try again.');
            if (downloadBtn) {
                downloadBtn.disabled = false;
                downloadBtn.innerHTML = '<i data-lucide="download" class="w-4 h-4"></i><span>Download Results</span>';
            }
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        console.log('Starting PDF generation for patient:', patientData.name);
        
        // Set document properties
        doc.setProperties({
            title: `Genetic Analysis Report - ${patientData.name}`,
            subject: 'Patient Test Results',
            author: 'Codex Genetic Analysis',
            creator: 'Codex System'
        });

        // Add header with better styling
        doc.setFillColor(34, 139, 34); // Green background
        doc.rect(0, 0, 210, 40, 'F');
        
        doc.setFontSize(24);
        doc.setTextColor(255, 255, 255); // White text
        doc.text('Codex Genetic Analysis Report', 105, 25, { align: 'center' });
        
        // Add patient information section with box - two column layout
        doc.setFillColor(248, 250, 252); // Light gray background
        doc.rect(20, 50, 170, 30, 'F');
        doc.setDrawColor(34, 139, 34);
        doc.rect(20, 50, 170, 30, 'S');
        
        doc.setFontSize(14);
        doc.setTextColor(34, 139, 34);
        doc.text('Patient Information', 25, 62);
        
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        // First row: Name and Phone
        doc.text(`Name: ${patientData.name}`, 25, 72);
        doc.text(`Phone: ${patientData.phone}`, 120, 72);
        
        // Second row: ID and Report Date
        doc.text(`ID: ${patientData.id}`, 25, 79);
        doc.text(`Report Date: ${new Date().toLocaleDateString()}`, 120, 79);
        
        // Add test results section with better spacing
        doc.setFontSize(16);
        doc.setTextColor(34, 139, 34);
        doc.text('Test Results Summary', 20, 105);
        
        let yPosition = 120;
        
        // Process each test type
        const testTypes = ['Wellness', 'Traits', 'Monogenic', 'Complex', 'Pharma'];
        
        testTypes.forEach(testType => {
            const listId = testType.toLowerCase() + '-list';
            const listContainer = document.getElementById(listId);
            
            if (listContainer) {
                const parameterItems = listContainer.querySelectorAll('.parameter-item');
                const itemsWithResults = Array.from(parameterItems).filter(item => 
                    item.classList.contains('has-results')
                );
                
                if (itemsWithResults.length > 0) {
                    // Check if we need a new page (with better spacing)
                    if (yPosition > 220) {
                        doc.addPage();
                        yPosition = 30;
                    }
                    
                    // Add test type header with background
                    doc.setFillColor(34, 139, 34);
                    doc.rect(20, yPosition - 5, 170, 8, 'F');
                    
                    doc.setFontSize(12);
                    doc.setTextColor(255, 255, 255);
                    doc.text(`${testType} Tests`, 25, yPosition);
                    yPosition += 15;
                    
                    // Add parameters with optimized table format
                    let currentY = yPosition;
                    const rowHeight = 12; // Smaller row height for more rows per page
                    const maxRowsPerPage = 22; // More rows per page
                    let rowCount = 0;
                    
                    // Add table header
                    doc.setFillColor(34, 139, 34);
                    doc.rect(20, currentY - 2, 170, 8, 'F');
                    doc.setFontSize(10);
                    doc.setTextColor(255, 255, 255);
                    doc.text('Parameter', 25, currentY + 3);
                    doc.text('Result', 105, currentY + 3);
                    currentY += 12;
                    
                    // Draw header border
                    doc.setDrawColor(34, 139, 34);
                    doc.line(20, currentY - 2, 190, currentY - 2);
                    doc.line(20, currentY - 2, 20, currentY + 8);
                    doc.line(190, currentY - 2, 190, currentY + 8);
                    doc.line(100, currentY - 2, 100, currentY + 8);
                    
                    itemsWithResults.forEach((item, index) => {
                        try {
                            // Check if we need a new page
                            if (rowCount > 0 && rowCount % maxRowsPerPage === 0) {
                                doc.addPage();
                                currentY = 30;
                                
                                // Add test type header on new page
                                doc.setFillColor(34, 139, 34);
                                doc.rect(20, currentY - 5, 170, 8, 'F');
                                doc.setFontSize(10);
                                doc.setTextColor(255, 255, 255);
                                doc.text(`${testType} Tests`, 25, currentY);
                                currentY += 15;
                                
                                // Redraw table header
                                doc.setFillColor(34, 139, 34);
                                doc.rect(20, currentY - 2, 170, 8, 'F');
                                doc.setFontSize(10);
                                doc.setTextColor(255, 255, 255);
                                doc.text('Parameter', 25, currentY + 3);
                                doc.text('Result', 105, currentY + 3);
                                currentY += 12;
                                
                                // Draw header border
                                doc.setDrawColor(34, 139, 34);
                                doc.line(20, currentY - 2, 190, currentY - 2);
                                doc.line(20, currentY - 2, 20, currentY + 8);
                                doc.line(190, currentY - 2, 190, currentY + 8);
                                doc.line(100, currentY - 2, 100, currentY + 8);
                            }
                            
                            // Get the original parameter name
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
                            
                            // Handle long text with wrapping - smaller column widths
                            const maxParamWidth = 65; // Smaller parameter column
                            const maxResultWidth = 75; // Smaller result column
                            
                            let wrappedParamName, wrappedResult;
                            try {
                                wrappedParamName = doc.splitTextToSize(parameterName, maxParamWidth);
                                wrappedResult = doc.splitTextToSize(cleanResult, maxResultWidth);
                            } catch (e) {
                                // Fallback if splitTextToSize fails
                                wrappedParamName = [parameterName.substring(0, 25) + (parameterName.length > 25 ? '...' : '')];
                                wrappedResult = [cleanResult.substring(0, 35) + (cleanResult.length > 35 ? '...' : '')];
                            }
                            
                            // Calculate row height based on text
                            const paramLines = Array.isArray(wrappedParamName) ? wrappedParamName.length : 1;
                            const resultLines = Array.isArray(wrappedResult) ? wrappedResult.length : 1;
                            const actualRowHeight = Math.max(rowHeight, Math.max(paramLines, resultLines) * 4 + 4);
                            
                            // Check if current row fits on page
                            if (currentY + actualRowHeight > 280) {
                                doc.addPage();
                                currentY = 30;
                                
                                // Add test type header on new page
                                doc.setFillColor(34, 139, 34);
                                doc.rect(20, currentY - 5, 170, 8, 'F');
                                doc.setFontSize(10);
                                doc.setTextColor(255, 255, 255);
                                doc.text(`${testType} Tests`, 25, currentY);
                                currentY += 15;
                                
                                // Redraw table header
                                doc.setFillColor(34, 139, 34);
                                doc.rect(20, currentY - 2, 170, 8, 'F');
                                doc.setFontSize(10);
                                doc.setTextColor(255, 255, 255);
                                doc.text('Parameter', 25, currentY + 3);
                                doc.text('Result', 105, currentY + 3);
                                currentY += 12;
                                
                                // Draw header border
                                doc.setDrawColor(34, 139, 34);
                                doc.line(20, currentY - 2, 190, currentY - 2);
                                doc.line(20, currentY - 2, 20, currentY + 8);
                                doc.line(190, currentY - 2, 190, currentY + 8);
                                doc.line(100, currentY - 2, 100, currentY + 8);
                            }
                            
                            // Add light background for alternating rows
                            if (index % 2 === 0) {
                                doc.setFillColor(250, 250, 250);
                                doc.rect(20, currentY - 2, 170, actualRowHeight, 'F');
                            }
                            
                            // Add parameter name (left column)
                            doc.setFontSize(8);
                            doc.setTextColor(0, 0, 0);
                            doc.text(wrappedParamName, 25, currentY + 4);
                            
                            // Add result (right column)
                            doc.setTextColor(100, 100, 100);
                            doc.text(wrappedResult, 105, currentY + 4);
                            
                            // Add row border
                            doc.setDrawColor(220, 220, 220);
                            doc.line(20, currentY + actualRowHeight - 2, 190, currentY + actualRowHeight - 2);
                            doc.line(20, currentY - 2, 20, currentY + actualRowHeight - 2);
                            doc.line(190, currentY - 2, 190, currentY + actualRowHeight - 2);
                            doc.line(100, currentY - 2, 100, currentY + actualRowHeight - 2);
                            
                            currentY += actualRowHeight;
                            rowCount++;
                            
                        } catch (error) {
                            console.error('Error processing item:', error);
                            // Continue with next item
                        }
                    });
                    
                    // Update yPosition for next test type
                    yPosition = currentY + 15;
                }
            }
        });
        

        
        // Add professional footer
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            
            // Footer line
            doc.setDrawColor(200, 200, 200);
            doc.line(20, 280, 190, 280);
            
            // Footer text
            doc.setFontSize(8);
            doc.setTextColor(128, 128, 128);
            doc.text(`Page ${i} of ${pageCount}`, 20, 285);
            doc.text('Generated by Codex Genetic Analysis System', 105, 285, { align: 'center' });
            doc.text(new Date().toLocaleString(), 190, 285, { align: 'right' });
        }
        
        // Save the PDF
        const fileName = `Codex_Report_${patientData.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(fileName);
        
        console.log('PDF generated successfully:', fileName);
        
        // Reset button state
        if (downloadBtn) {
            downloadBtn.disabled = false;
            downloadBtn.innerHTML = '<i data-lucide="download" class="w-4 h-4"></i><span>Download Results</span>';
        }
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF. Please try again.');
        
        // Reset button state on error
        if (downloadBtn) {
            downloadBtn.disabled = false;
            downloadBtn.innerHTML = '<i data-lucide="download" class="w-4 h-4"></i><span>Download Results</span>';
        }
    }
}




