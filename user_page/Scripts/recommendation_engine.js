// Recommendation Engine for Genetic Test Results
// Provides personalized recommendations based on wellness, traits, and general lifestyle

class RecommendationEngine {
    constructor() {
        this.apiKey = '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';
        this.baseUrl = 'https://api.openai.com/v1/chat/completions';
    }

    // Generate wellness parameter recommendations
    async generateWellnessRecommendations(parameterName, resultValue) {
        const prompt = `Generate a specific, actionable recommendation for the wellness parameter "${parameterName}" with result "${resultValue}". 
        Provide concrete advice like specific foods to eat/avoid, exact timing, or precise actions. Make it highly personalized to their result. Keep it concise but specific.`;
        
        return await this.generateRecommendation(prompt);
    }

    // Generate traits parameter recommendations
    async generateTraitsRecommendations(parameterName, resultValue) {
        const prompt = `Generate a specific, actionable recommendation for the personal trait "${parameterName}" with result "${resultValue}". 
        Provide concrete advice like specific daily routines, exact behaviors to adopt/avoid, or precise lifestyle changes. Make it highly personalized to their trait result. Keep it concise but specific.`;
        
        return await this.generateRecommendation(prompt);
    }

    // Generate personalized lifestyle recommendations based on actual test results
    async generatePersonalizedRecommendations(testTypes, userResults) {
        // Analyze user's actual results to identify abnormal/important findings
        const abnormalResults = this.identifyAbnormalResults(userResults);
        const majorParameters = this.selectMajorParameters(userResults);
        
        const prompt = `Analyze the user's genetic test results with EXTREME SPECIFICITY and provide HIGHLY DETAILED, PERSONALIZED insights:

CRITICAL ABNORMAL RESULTS (Require Immediate Attention):
${abnormalResults.filter(r => r.priority >= 9).map(result => `
[CRITICAL] ${result.parameter}: ${result.value}
   Significance: ${result.significance}
   Specific Action: ${result.action}
   Category: ${result.category}`).join('\n')}

HIGH-PRIORITY ABNORMAL RESULTS:
${abnormalResults.filter(r => r.priority >= 7 && r.priority < 9).map(result => `
[HIGH-RISK] ${result.parameter}: ${result.value}
   Significance: ${result.significance}
   Specific Action: ${result.action}
   Category: ${result.category}`).join('\n')}

MODERATE CONCERNS:
${abnormalResults.filter(r => r.priority >= 5 && r.priority < 7).map(result => `
[MODERATE] ${result.parameter}: ${result.value}
   Significance: ${result.significance}
   Specific Action: ${result.action}
   Category: ${result.category}`).join('\n')}

COMPREHENSIVE PARAMETER ANALYSIS:
${majorParameters.slice(0, 20).map(param => `- ${param.category}: ${param.parameter} = ${param.result} (Priority: ${param.priority})`).join('\n')}

Based on these SPECIFIC findings, provide EXTREMELY DETAILED, personalized insights that:

1. **CRITICAL ISSUES FIRST**: Address each critical finding with specific medical actions, specialist referrals, and emergency measures needed
2. **HIGH-RISK MANAGEMENT**: Provide detailed action plans for each high-risk parameter including specific lifestyle changes, monitoring protocols, and prevention strategies
3. **MODERATE RISK OPTIMIZATION**: Give specific guidance for moderate concerns with gradual improvement strategies
4. **PARAMETER-SPECIFIC ANALYSIS**: Analyze each major parameter individually with specific implications for their health
5. **FOOD & NUTRITION SPECIFICS**: Provide exact food recommendations, meal plans, and dietary restrictions based on their specific genetic variations
6. **EXERCISE & LIFESTYLE SPECIFICS**: Give precise exercise recommendations, daily routines, and lifestyle modifications tailored to their genetic profile
7. **MEDICAL MONITORING PLAN**: Create a specific monitoring schedule for each concerning parameter
8. **PREVENTION STRATEGIES**: Develop targeted prevention strategies for their specific risk factors

Make this analysis EXTREMELY COMPREHENSIVE (6-8 detailed paragraphs) with:
- Specific parameter-by-parameter analysis
- Exact action items for each abnormal result
- Personalized recommendations based on their specific genetic makeup
- Detailed lifestyle modifications for their unique profile
- Specific food and exercise recommendations
- Medical monitoring protocols
- Prevention strategies for their specific risks

Focus on providing ACTIONABLE, SPECIFIC advice they can implement immediately. Every recommendation should be tailored to their exact genetic results and health profile.`;
        
        return await this.generateRecommendation(prompt);
    }

    // Identify abnormal or concerning results from user data - ENHANCED for comprehensive analysis
    identifyAbnormalResults(userResults) {
        const abnormal = [];
        
        // Analyze each test type for concerning results
        Object.keys(userResults).forEach(testType => {
            if (userResults[testType] && Array.isArray(userResults[testType])) {
                userResults[testType].forEach(item => {
                    if (item.result) {
                        const result = item.result.toLowerCase();
                        const parameterName = item.name.toLowerCase();
                        
                        // CRITICAL HEALTH MARKERS - Highest Priority
                        if (this.isCriticalHealthMarker(parameterName)) {
                            if (result.includes('high') || result.includes('elevated') || result.includes('increased') || 
                                result.includes('severe') || result.includes('critical') || result.includes('risk')) {
                                abnormal.push({
                                    parameter: item.name,
                                    value: item.result,
                                    significance: 'CRITICAL - Immediate Medical Attention Required',
                                    category: testType,
                                    priority: 10,
                                    action: this.getCriticalAction(parameterName, result)
                                });
                            }
                        }
                        
                        // HIGH-RISK INDICATORS
                        else if (result.includes('high') || result.includes('elevated') || result.includes('increased') || 
                                 result.includes('severe') || result.includes('critical') || result.includes('risk')) {
                            abnormal.push({
                                parameter: item.name,
                                value: item.result,
                                significance: 'High Risk - Requires Immediate Attention',
                                category: testType,
                                priority: 9,
                                action: this.getHighRiskAction(parameterName, result)
                            });
                        }
                        
                        // MODERATE RISKS
                        else if (result.includes('moderate') || result.includes('intermediate') || result.includes('above') ||
                                 result.includes('borderline') || result.includes('slightly elevated')) {
                            abnormal.push({
                                parameter: item.name,
                                value: item.result,
                                significance: 'Moderate Risk - Monitor Closely',
                                category: testType,
                                priority: 7,
                                action: this.getModerateRiskAction(parameterName, result)
                            });
                        }
                        
                        // DEFICIENCIES OR LOW VALUES
                        else if (result.includes('low') || result.includes('decreased') || result.includes('deficient') || 
                                 result.includes('poor') || result.includes('below') || result.includes('insufficient')) {
                            abnormal.push({
                                parameter: item.name,
                                value: item.result,
                                significance: 'Below Optimal - Needs Improvement',
                                category: testType,
                                priority: 6,
                                action: this.getDeficiencyAction(parameterName, result)
                            });
                        }
                        
                        // UNUSUAL PATTERNS
                        else if (result.includes('unusual') || result.includes('atypical') || result.includes('variant') ||
                                 result.includes('mutation') || result.includes('polymorphism')) {
                            abnormal.push({
                                parameter: item.name,
                                value: item.result,
                                significance: 'Unusual Pattern - Requires Investigation',
                                category: testType,
                                priority: 5,
                                action: this.getUnusualPatternAction(parameterName, result)
                            });
                        }
                    }
                });
            }
        });
        
        // Sort by priority and return comprehensive list
        abnormal.sort((a, b) => b.priority - a.priority);
        return abnormal; // Return ALL abnormal results, not just top 8
    }

    // NEW: Check if parameter is a critical health marker
    isCriticalHealthMarker(parameterName) {
        const criticalMarkers = [
            'diabetes', 'heart', 'cancer', 'stroke', 'kidney', 'liver', 'lung', 'brain',
            'blood pressure', 'cholesterol', 'glucose', 'creatinine', 'bilirubin', 'alt', 'ast',
            'troponin', 'bnp', 'd-dimer', 'psa', 'ca-125', 'afp', 'cea', 'ferritin',
            'hemoglobin', 'platelets', 'white blood cells', 'sodium', 'potassium', 'calcium',
            'thyroid', 'adrenal', 'pituitary', 'pancreas', 'gallbladder', 'spleen'
        ];
        return criticalMarkers.some(marker => parameterName.includes(marker));
    }

    // NEW: Get specific action for critical health markers
    getCriticalAction(parameterName, result) {
        if (parameterName.includes('diabetes') || parameterName.includes('glucose')) {
            return 'Immediate blood sugar monitoring and endocrinologist consultation required';
        }
        if (parameterName.includes('heart') || parameterName.includes('cardiac')) {
            return 'Emergency cardiology evaluation and continuous monitoring needed';
        }
        if (parameterName.includes('cancer') || parameterName.includes('tumor')) {
            return 'Oncology consultation and comprehensive screening required';
        }
        if (parameterName.includes('stroke') || parameterName.includes('cerebrovascular')) {
            return 'Neurology consultation and brain imaging required';
        }
        if (parameterName.includes('kidney') || parameterName.includes('renal')) {
            return 'Nephrology consultation and kidney function monitoring required';
        }
        return 'Immediate medical evaluation and specialist consultation required';
    }

    // NEW: Get specific action for high-risk results
    getHighRiskAction(parameterName, result) {
        if (parameterName.includes('cholesterol') || parameterName.includes('lipid')) {
            return 'Implement strict diet changes and consider medication under medical supervision';
        }
        if (parameterName.includes('blood pressure') || parameterName.includes('hypertension')) {
            return 'Daily blood pressure monitoring and lifestyle modifications required';
        }
        if (parameterName.includes('vitamin') || parameterName.includes('mineral')) {
            return 'Supplementation and dietary changes under medical guidance';
        }
        if (parameterName.includes('allergy') || parameterName.includes('intolerance')) {
            return 'Avoid trigger foods and carry emergency medication';
        }
        return 'Lifestyle modifications and regular monitoring required';
    }

    // NEW: Get specific action for moderate risks
    getModerateRiskAction(parameterName, result) {
        if (parameterName.includes('weight') || parameterName.includes('bmi')) {
            return 'Gradual weight management through diet and exercise';
        }
        if (parameterName.includes('exercise') || parameterName.includes('fitness')) {
            return 'Progressive exercise program with professional guidance';
        }
        if (parameterName.includes('sleep') || parameterName.includes('circadian')) {
            return 'Sleep hygiene improvements and routine establishment';
        }
        return 'Regular monitoring and gradual lifestyle improvements';
    }

    // NEW: Get specific action for deficiencies
    getDeficiencyAction(parameterName, result) {
        if (parameterName.includes('vitamin')) {
            return 'Targeted supplementation and dietary enrichment required';
        }
        if (parameterName.includes('mineral')) {
            return 'Mineral supplementation and dietary sources increased';
        }
        if (parameterName.includes('protein') || parameterName.includes('amino acid')) {
            return 'Protein intake optimization and quality improvement';
        }
        if (parameterName.includes('energy') || parameterName.includes('metabolism')) {
            return 'Metabolic optimization through nutrition and exercise';
        }
        return 'Nutritional optimization and lifestyle improvements';
    }

    // NEW: Get specific action for unusual patterns
    getUnusualPatternAction(parameterName, result) {
        if (parameterName.includes('genetic') || parameterName.includes('variant')) {
            return 'Genetic counseling and family history evaluation';
        }
        if (parameterName.includes('mutation') || parameterName.includes('polymorphism')) {
            return 'Specialist consultation for genetic implications';
        }
        if (parameterName.includes('atypical') || parameterName.includes('unusual')) {
            return 'Further investigation and specialist consultation';
        }
        return 'Medical evaluation and potential specialist referral';
    }

    // Select major parameters from different test categories - EXPANDED for comprehensive coverage
    selectMajorParameters(userResults) {
        const major = [];
        
        // COMPREHENSIVE Wellness parameters (44 total)
        if (userResults.wellness) {
            const keyWellness = [
                'Blood glucose', 'HDL cholesterol', 'LDL cholesterol', 'Blood pressure', 'Body mass index', 'Vitamin D',
                'Vitamin B12', 'Vitamin C', 'Vitamin E', 'Vitamin A', 'Calcium levels', 'Creatinine levels',
                'Urate levels', 'Phosphate levels', 'Caffeine', 'Exercise', 'Muscle endurance', 'Lung function',
                'Histamine intolerance', 'Lactose intolerance', 'Celiac disease', 'Peanut allergy', 'Bitter taste',
                'Food intake control', 'Farmer-hunter profile', 'Systolic', 'Diastolic', 'Tendinopathies',
                'Bone mineral density', 'Body fat percentage', 'Visceral adipose tissue', 'Omega fatty acids',
                'Antioxidant capacity', 'Galectin-3', 'Myoadenylate deaminase', 'Exercise-induced muscle damage'
            ];
            userResults.wellness.forEach(item => {
                if (keyWellness.some(key => item.name.toLowerCase().includes(key.toLowerCase()))) {
                    major.push({
                        category: 'Wellness',
                        parameter: item.name,
                        result: item.result || 'Analysis needed',
                        priority: this.getParameterPriority(item.name, item.result)
                    });
                }
            });
        }
        
        // COMPREHENSIVE Traits parameters (81 total)
        if (userResults.traits) {
            const keyTraits = [
                'Caffeine', 'Sleep', 'Exercise', 'Weight', 'Alcohol', 'Morning person', 'Circadian rhythm',
                'Menarche', 'Hair loss', 'Eye color', 'Skin color', 'Height', 'Muscle composition',
                'Fat distribution', 'Bone density', 'Joint health', 'Immune response', 'Inflammation',
                'Oxidative stress', 'Detoxification', 'Metabolism', 'Energy levels', 'Stress response',
                'Anxiety', 'Depression', 'ADHD', 'Autism', 'Schizophrenia', 'Bipolar disorder',
                'Personality', 'Intelligence', 'Memory', 'Learning', 'Creativity', 'Risk-taking',
                'Social behavior', 'Empathy', 'Trust', 'Aggression', 'Impulsivity', 'Self-control',
                'Addiction', 'Smoking', 'Gambling', 'Food preferences', 'Taste sensitivity',
                'Smell sensitivity', 'Pain tolerance', 'Temperature sensitivity', 'Sun sensitivity',
                'Allergies', 'Asthma', 'Eczema', 'Psoriasis', 'Acne', 'Hair texture', 'Nail health',
                'Dental health', 'Vision', 'Hearing', 'Balance', 'Coordination', 'Flexibility',
                'Strength', 'Endurance', 'Recovery', 'Injury risk', 'Healing', 'Aging', 'Longevity'
            ];
            userResults.traits.forEach(item => {
                if (keyTraits.some(key => item.name.toLowerCase().includes(key.toLowerCase()))) {
                    major.push({
                        category: 'Personal Traits',
                        parameter: item.name,
                        result: item.result || 'Analysis needed',
                        priority: this.getParameterPriority(item.name, item.result)
                    });
                }
            });
        }
        
        // COMPREHENSIVE Complex disease risks (101 total)
        if (userResults.complex) {
            const keyComplex = [
                'Diabetes', 'Heart disease', 'Obesity', 'Hypertension', 'Cancer', 'Alzheimer',
                'Parkinson', 'Multiple sclerosis', 'Rheumatoid arthritis', 'Lupus', 'Crohn disease',
                'Ulcerative colitis', 'Asthma', 'COPD', 'Fibrosis', 'Cirrhosis', 'Kidney disease',
                'Thyroid disease', 'Autoimmune', 'Inflammatory bowel', 'Psoriasis', 'Eczema',
                'Migraine', 'Epilepsy', 'Stroke', 'Atherosclerosis', 'Coronary artery disease',
                'Heart failure', 'Arrhythmia', 'Valvular disease', 'Cardiomyopathy', 'Peripheral artery',
                'Venous thrombosis', 'Pulmonary embolism', 'Lung cancer', 'Breast cancer', 'Colon cancer',
                'Prostate cancer', 'Ovarian cancer', 'Pancreatic cancer', 'Liver cancer', 'Kidney cancer',
                'Bladder cancer', 'Melanoma', 'Leukemia', 'Lymphoma', 'Brain tumor', 'Bone cancer',
                'Skin cancer', 'Oral cancer', 'Esophageal cancer', 'Stomach cancer', 'Gallbladder cancer',
                'Bile duct cancer', 'Adrenal cancer', 'Pituitary tumor', 'Parathyroid disease',
                'Adrenal disease', 'Pituitary disease', 'Gonadal disease', 'Reproductive disorders',
                'Fertility issues', 'Pregnancy complications', 'Birth defects', 'Developmental disorders',
                'Learning disabilities', 'Behavioral disorders', 'Psychiatric conditions', 'Addiction disorders',
                'Eating disorders', 'Sleep disorders', 'Movement disorders', 'Sensory disorders',
                'Metabolic disorders', 'Endocrine disorders', 'Hematologic disorders', 'Immunologic disorders',
                'Infectious disease susceptibility', 'Vaccine response', 'Drug metabolism', 'Toxicity risk',
                'Radiation sensitivity', 'Chemical sensitivity', 'Environmental sensitivity', 'Climate adaptation',
                'Altitude adaptation', 'Exercise adaptation', 'Diet adaptation', 'Stress adaptation',
                'Aging rate', 'Longevity factors', 'Quality of life factors', 'Disease progression',
                'Treatment response', 'Recovery rate', 'Complication risk', 'Mortality risk'
            ];
            userResults.complex.forEach(item => {
                if (keyComplex.some(key => item.name.toLowerCase().includes(key.toLowerCase()))) {
                    major.push({
                        category: 'Disease Risk',
                        parameter: item.name,
                        result: item.result || 'Analysis needed',
                        priority: this.getParameterPriority(item.name, item.result)
                    });
                }
            });
        }
        
        // COMPREHENSIVE Pharmacogenomics (79 total)
        if (userResults.pharma) {
            const keyPharma = [
                'Warfarin', 'Clopidogrel', 'Statins', 'Aspirin', 'Codeine', 'Tramadol', 'Morphine',
                'Oxycodone', 'Hydrocodone', 'Fentanyl', 'Methadone', 'Buprenorphine', 'Naloxone',
                'Antidepressants', 'Antipsychotics', 'Antianxiety', 'Mood stabilizers', 'Stimulants',
                'Sedatives', 'Anticonvulsants', 'Antiparkinson', 'Antialzheimer', 'Antimigraine',
                'Antihistamines', 'Decongestants', 'Cough suppressants', 'Expectorants', 'Bronchodilators',
                'Corticosteroids', 'Immunosuppressants', 'Antibiotics', 'Antivirals', 'Antifungals',
                'Antiparasitics', 'Antimalarials', 'Antitubercular', 'Antileprosy', 'Anticancer',
                'Antiemetics', 'Antidiarrheals', 'Laxatives', 'Antacids', 'Proton pump inhibitors',
                'H2 blockers', 'Prokinetics', 'Antispasmodics', 'Anticholinergics', 'Beta blockers',
                'Calcium channel blockers', 'ACE inhibitors', 'ARBs', 'Diuretics', 'Vasodilators',
                'Antiarrhythmics', 'Inotropes', 'Anticoagulants', 'Antiplatelets', 'Thrombolytics',
                'Hormone therapy', 'Contraceptives', 'Fertility drugs', 'Thyroid medications',
                'Diabetes medications', 'Osteoporosis medications', 'Bone medications', 'Joint medications',
                'Pain medications', 'Anti-inflammatory', 'Muscle relaxants', 'Antispasmodics',
                'Antiemetics', 'Antinauseants', 'Appetite stimulants', 'Appetite suppressants',
                'Weight loss medications', 'Metabolic enhancers', 'Energy boosters', 'Sleep aids',
                'Wakefulness promoters', 'Cognitive enhancers', 'Memory boosters', 'Focus enhancers'
            ];
            userResults.pharma.forEach(item => {
                if (keyPharma.some(key => item.name.toLowerCase().includes(key.toLowerCase()))) {
                    major.push({
                        category: 'Drug Response',
                        parameter: item.name,
                        result: item.result || 'Analysis needed',
                        priority: this.getParameterPriority(item.name, item.result)
                    });
                }
            });
        }
        
        // COMPREHENSIVE Monogenic diseases
        if (userResults.monogenic) {
            const keyMonogenic = [
                'Cystic fibrosis', 'Sickle cell', 'Huntington', 'Marfan syndrome', 'Ehlers-Danlos',
                'Neurofibromatosis', 'Tuberous sclerosis', 'Fragile X', 'Down syndrome', 'Turner syndrome',
                'Klinefelter syndrome', 'Prader-Willi', 'Angelman', 'Williams syndrome', 'Cri du chat',
                'Phenylketonuria', 'Galactosemia', 'Maple syrup urine', 'Tay-Sachs', 'Gaucher disease',
                'Niemann-Pick', 'Fabry disease', 'Pompe disease', 'Hurler syndrome', 'Hunter syndrome',
                'Sanfilippo syndrome', 'Morquio syndrome', 'Sly syndrome', 'Maroteaux-Lamy', 'Scheie syndrome',
                'Hemophilia A', 'Hemophilia B', 'Von Willebrand', 'Factor V Leiden', 'Prothrombin mutation',
                'MTHFR mutation', 'BRCA1', 'BRCA2', 'TP53', 'APC', 'MLH1', 'MSH2', 'MSH6', 'PMS2',
                'PTEN', 'STK11', 'CDH1', 'SMAD4', 'BMPR1A', 'ATM', 'CHEK2', 'PALB2', 'RAD51C', 'RAD51D'
            ];
            userResults.monogenic.forEach(item => {
                if (keyMonogenic.some(key => item.name.toLowerCase().includes(key.toLowerCase()))) {
                    major.push({
                        category: 'Monogenic Disease',
                        parameter: item.name,
                        result: item.result || 'Analysis needed',
                        priority: this.getParameterPriority(item.name, item.result)
                    });
                }
            });
        }
        
        // Sort by priority and return comprehensive list
        major.sort((a, b) => b.priority - a.priority);
        return major; // Return ALL major parameters, not just top 10
    }

    // NEW: Get parameter priority based on result and parameter type
    getParameterPriority(parameterName, result) {
        if (!result || result === 'Analysis needed') return 1;
        
        const lowerResult = result.toLowerCase();
        const lowerName = parameterName.toLowerCase();
        
        // High priority: Critical health markers
        if (lowerName.includes('diabetes') || lowerName.includes('heart') || lowerName.includes('cancer') ||
            lowerName.includes('stroke') || lowerName.includes('kidney') || lowerName.includes('liver')) {
            if (lowerResult.includes('high') || lowerResult.includes('elevated') || lowerResult.includes('risk')) {
                return 10; // Highest priority
            }
        }
        
        // High priority: Abnormal results in any parameter
        if (lowerResult.includes('high') || lowerResult.includes('elevated') || lowerResult.includes('increased') ||
            lowerResult.includes('severe') || lowerResult.includes('critical')) {
            return 9;
        }
        
        // Medium-high priority: Moderate risks
        if (lowerResult.includes('moderate') || lowerResult.includes('intermediate') || lowerResult.includes('above')) {
            return 7;
        }
        
        // Medium priority: Low results that might indicate deficiencies
        if (lowerResult.includes('low') || lowerResult.includes('decreased') || lowerResult.includes('deficient') ||
            lowerResult.includes('poor')) {
            return 6;
        }
        
        // Medium-low priority: Normal results
        if (lowerResult.includes('normal') || lowerResult.includes('average') || lowerResult.includes('optimal')) {
            return 4;
        }
        
        // Low priority: Favorable results
        if (lowerResult.includes('low risk') || lowerResult.includes('favorable') || lowerResult.includes('protective')) {
            return 2;
        }
        
        return 3; // Default medium priority
    }

    // Core API call function
    async generateRecommendation(prompt) {
        try {
            const response = await fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content: 'You are a genetic counselor and lifestyle expert. Provide highly specific, actionable recommendations based on genetic test results. Give concrete advice with specific foods, timing, behaviors, and actions. Avoid generic advice - everything should be tailored to their specific genetic profile and results.'
                        },
                        {
                            role: 'user',
                            content: prompt
                        }
                    ],
                    max_tokens: 200,
                    temperature: 0.7
                })
            });

            if (!response.ok) {
                throw new Error(`API call failed: ${response.status}`);
            }

            const data = await response.json();
            return data.choices[0].message.content.trim();
        } catch (error) {
            console.error('Error generating recommendation:', error);
            return this.getFallbackRecommendation(prompt);
        }
    }

    // Personalized fallback recommendations based on genetic profile
    getFallbackRecommendation(prompt) {
        if (prompt.includes('wellness')) {
            return "Based on your genetic profile, focus on nutrient-dense foods that support your specific health markers. Consider timing your meals to optimize your metabolism.";
        } else if (prompt.includes('traits')) {
            return "Your genetic traits suggest personalized lifestyle adjustments. Focus on activities and habits that align with your unique characteristics.";
        } else {
            return "Your genetic results indicate: Start your day with protein-rich breakfasts (eggs, Greek yogurt) at 7-8 AM. Include omega-3 rich foods (salmon, walnuts) in lunch. Avoid heavy meals after 7 PM. Drink 2-3 liters of water daily, with extra hydration during exercise. Maintain consistent sleep schedule from 10 PM to 6 AM for optimal genetic expression.";
        }
    }

    // Generate recommendations for multiple parameters
    async generateBatchRecommendations(parameters, type) {
        const recommendations = {};
        
        for (const param of parameters) {
            if (type === 'wellness') {
                recommendations[param.name] = await this.generateWellnessRecommendations(param.name, param.result || 'N/A');
            } else if (type === 'traits') {
                recommendations[param.name] = await this.generateTraitsRecommendations(param.name, param.result || 'N/A');
            }
        }
        
        return recommendations;
    }

    // Generate comprehensive report
    async generateComprehensiveReport(testResults) {
        const report = {
            wellness: {},
            traits: {},
            general: ''
        };

        // Generate wellness recommendations
        if (testResults.wellness && testResults.wellness.length > 0) {
            report.wellness = await this.generateBatchRecommendations(testResults.wellness, 'wellness');
        }

        // Generate traits recommendations
        if (testResults.traits && testResults.traits.length > 0) {
            report.traits = await this.generateBatchRecommendations(testResults.traits, 'traits');
        }

        // Generate general recommendations
        const testTypes = Object.keys(testResults).filter(key => testResults[key] && testResults[key].length > 0);
        report.general = await this.generateGeneralRecommendations(testTypes, testResults);

        return report;
    }
}

// Wellness parameter-specific recommendations
const wellnessRecommendations = {
    "Antioxidant capacity": "Increase intake of colorful fruits and vegetables rich in antioxidants like berries, spinach, and bell peppers.",
    "Apolipoprotein A1 levels": "Focus on heart-healthy fats from sources like olive oil, nuts, and fatty fish to support healthy cholesterol levels.",
    "Apolipoprotein B levels": "Limit saturated and trans fats, increase fiber intake, and maintain regular exercise to manage cholesterol levels.",
    "Bitter taste perception": "Experiment with bitter foods like dark chocolate, coffee, and leafy greens to develop taste preferences.",
    "Blood glucose": "Maintain stable blood sugar through regular meals, complex carbohydrates, and regular physical activity.",
    "Body fat percentage": "Combine strength training with cardio and maintain a balanced diet to optimize body composition.",
    "Body mass index": "Focus on sustainable lifestyle changes including balanced nutrition and regular physical activity.",
    "Bone mineral density": "Ensure adequate calcium and vitamin D intake, along with weight-bearing exercises for bone health.",
    "Caffeine and anxiety": "Monitor caffeine intake and consider switching to decaf or herbal alternatives if experiencing anxiety.",
    "Caffeine and sports performance": "Time caffeine consumption strategically around workouts for optimal performance benefits.",
    "Caffeine dependence after prolonged consumption": "Gradually reduce caffeine intake to avoid withdrawal symptoms and improve sleep quality.",
    "Calcium levels": "Include dairy products, leafy greens, and fortified foods in your diet for optimal calcium intake.",
    "Celiac disease predisposition": "Monitor for gluten sensitivity symptoms and consider gluten-free alternatives if needed.",
    "Creatinine levels": "Stay well-hydrated and maintain kidney health through balanced nutrition and regular exercise.",
    "Diastolic blood pressure levels": "Reduce sodium intake, increase potassium-rich foods, and maintain regular physical activity.",
    "Exercise-induced muscle damage (initial phase)": "Implement proper warm-up routines and gradually increase exercise intensity.",
    "Exercise-induced muscle damage (regeneration capacity)": "Ensure adequate protein intake and rest periods between intense workouts.",
    "Exercise-induced muscle damage (second phase)": "Focus on recovery nutrition and consider anti-inflammatory foods post-exercise.",
    "Farmer-hunter profile": "Balance high-intensity workouts with recovery periods and maintain adequate protein intake.",
    "Food intake control": "Practice mindful eating, maintain regular meal times, and focus on nutrient-dense foods.",
    "Galectin-3 levels": "Include anti-inflammatory foods like turmeric, ginger, and omega-3 rich foods in your diet.",
    "Genetic predisposition to peanut allergy": "Avoid peanuts and carry emergency medication if prescribed by your doctor.",
    "Glycated hemoglobin levels": "Focus on low-glycemic foods and regular blood sugar monitoring.",
    "HDL cholesterol levels": "Increase physical activity and consume healthy fats to boost good cholesterol levels.",
    "Histamine intolerance": "Avoid high-histamine foods and consider a low-histamine diet if symptoms persist.",
    "Intraocular pressure": "Regular eye check-ups and consider eye exercises to maintain healthy eye pressure.",
    "Lactose intolerance": "Choose lactose-free dairy alternatives or take lactase supplements when consuming dairy.",
    "LDL cholesterol levels": "Limit saturated fats, increase fiber intake, and maintain regular cardiovascular exercise.",
    "Levels of vitamin A (beta carotene)": "Include orange and dark green vegetables for natural vitamin A sources.",
    "Long-chain omega fatty acids levels": "Increase consumption of fatty fish, flaxseeds, and walnuts for omega-3s.",
    "Lung function (exhaled air volume)": "Practice deep breathing exercises and avoid smoking or secondhand smoke exposure.",
    "Muscle endurance": "Implement progressive resistance training and ensure adequate protein intake for muscle development.",
    "Myoadenylate deaminase (AMPD1 gene)": "Focus on high-intensity interval training and ensure proper recovery periods.",
    "Prediction of visceral adipose tissue": "Combine cardio and strength training with a balanced diet to reduce visceral fat.",
    "Preference for sweets": "Satisfy sweet cravings with natural alternatives like fruits and dark chocolate in moderation.",
    "Serum phosphate levels": "Include phosphorus-rich foods like dairy, meat, and whole grains in your diet.",
    "Systolic blood pressure levels": "Maintain a heart-healthy diet low in sodium and high in potassium-rich foods.",
    "Tendinopathies in lower extremities (legs)": "Implement proper stretching routines and consider low-impact exercises.",
    "Tendinopathies in upper extremities (arms)": "Focus on proper form during upper body exercises and include rest days.",
    "Urate levels": "Limit purine-rich foods and maintain adequate hydration to support healthy uric acid levels.",
    "Vitamin B12 levels": "Include animal products or fortified foods in your diet, or consider B12 supplementation.",
    "Vitamin C levels": "Consume citrus fruits, berries, and vegetables daily for optimal vitamin C intake.",
    "Vitamin D levels": "Get regular sun exposure and include vitamin D-rich foods or consider supplementation.",
    "Vitamin E levels": "Include nuts, seeds, and vegetable oils in your diet for natural vitamin E sources."
};

// Traits parameter-specific recommendations
const traitsRecommendations = {
    "Acne vulgaris": "🧴 Maintain a consistent skincare routine with gentle cleansers. Avoid dairy and high-glycemic foods that may trigger breakouts.",
    "Alanine aminotransferase levels": "🫁 Focus on liver health through balanced nutrition, avoiding excessive alcohol, and including liver-supporting foods like beets and turmeric.",
    "Alcohol flush reaction": "🍷 Limit alcohol intake significantly. This genetic variant increases cancer risk, so consider alcohol-free alternatives.",
    "Alkaline phosphatase levels": "🦴 Monitor bone and liver health. Include calcium-rich foods and vitamin D for bone support.",
    "Asparagus odor detection": "🌿 This trait is harmless and doesn't require lifestyle modifications.",
    "Aspartate aminotransferase levels": "🫁 Maintain liver health through healthy eating, regular exercise, and avoiding liver-toxic substances.",
    "Basal metabolic rate": "⚡ Adjust caloric intake based on your metabolic rate. Include metabolism-boosting foods like green tea and spicy foods.",
    "Bilirubin levels": "🫁 Monitor liver function and maintain a healthy lifestyle. Include liver-supporting foods and avoid excessive alcohol.",
    "Birth weight": "👶 Focus on maintaining a healthy weight and lifestyle to optimize future pregnancy outcomes.",
    "Blood coagulation, factor V Leiden and 20210G-A": "🩸 Be aware of increased clotting risk. Discuss with healthcare providers and consider blood-thinning foods like garlic and ginger.",
    "Blood Group ABO/Rh": "🩸 Consider your blood type when making dietary choices, though evidence is limited.",
    "C-reactive protein levels": "🔥 Focus on anti-inflammatory lifestyle choices. Include omega-3 rich foods and avoid inflammatory foods like processed sugars.",
    "Cathepsin D levels": "💪 Maintain overall health through balanced nutrition and regular exercise.",
    "CCR5Delta32 and susceptibility to HIV infection": "🛡️ Practice safe sex and maintain awareness of HIV prevention strategies.",
    "Cognitive ability": "🧠 Engage in mentally stimulating activities like puzzles, reading, and learning new skills. Include brain-healthy foods like fatty fish and berries.",
    "Corneal curvature": "👁️ Regular eye check-ups and proper eye care to maintain vision health.",
    "Corneal hysteresis": "👁️ Protect your eyes from UV damage and maintain good eye hygiene.",
    "Dental caries and periodontitis": "🦷 Maintain excellent oral hygiene and regular dental check-ups. Limit sugary foods and include calcium-rich foods.",
    "Duffy Antigen, malaria resistant": "🦟 This trait provides natural protection but doesn't eliminate need for prevention.",
    "Ear lobe type": "👂 This is a cosmetic trait that doesn't require lifestyle modifications.",
    "Earwax type / Armpit odor": "🧼 Maintain good personal hygiene and consider appropriate products for your type.",
    "Eosinophil count": "🤧 Monitor for allergies and maintain an anti-inflammatory lifestyle. Include quercetin-rich foods like apples and onions.",
    "Epigenetic aging": "⏰ Focus on healthy lifestyle choices that can positively influence aging processes.",
    "Estradiol levels": "⚖️ Maintain hormonal balance through healthy lifestyle and stress management. Include phytoestrogen-rich foods like flaxseeds.",
    "Eye clarity": "👁️ Protect your eyes from UV damage and maintain good eye hygiene practices. Include lutein-rich foods like spinach and kale.",
    "Facial aging": "🧴 Use sun protection and maintain a skincare routine to support skin health.",
    "Frequency of bowel movements": "🚽 Maintain a high-fiber diet and stay hydrated for optimal digestive health.",
    "Gamma glutamyl transferase levels": "🫁 Focus on liver health through balanced nutrition and exercise.",
    "Gene COMT": "🧘 Consider stress management techniques and maintain a balanced lifestyle.",
    "Gene MTHFR": "🥬 Ensure adequate folate intake and consider B-vitamin supplementation if needed.",
    "Gene MTR": "🥩 Maintain adequate B12 levels through diet or supplementation.",
    "Gene MTRR": "🥬 Focus on B-vitamin rich foods and consider supplementation if necessary.",
    "Hair color": "💇 Protect your hair from UV damage and use appropriate hair care products.",
    "Hair texture": "💇 Use hair care products and styling techniques appropriate for your hair type.",
    "Heat production in response to cold": "❄️ Dress appropriately for weather conditions and maintain core body temperature.",
    "Height": "📏 Focus on maintaining good posture and bone health through nutrition and exercise.",
    "HLA-B27 antigen": "⚠️ Be aware of increased risk for certain autoimmune conditions and monitor symptoms.",
    "Insomnia": "😴 Practice good sleep hygiene and consider stress management techniques.",
    "Intensity of itching due to mosquito bites": "🦟 Use insect repellent and avoid mosquito-prone areas during peak times.",
    "Left-handedness (left lateral)": "✋ This trait doesn't require lifestyle modifications.",
    "Liver iron levels": "🫁 Monitor iron intake and maintain liver health through healthy lifestyle choices.",
    "Lymphocyte count": "🛡️ Support immune health through balanced nutrition and regular exercise.",
    "Male baldness": "👨‍🦲 Consider early intervention strategies and maintain scalp health.",
    "Mental agility": "🧠 Engage in cognitive training exercises and maintain brain-healthy habits.",
    "Metabolizer profile CYP2C19": "💊 Discuss medication metabolism with healthcare providers.",
    "Metabolizer profile CYP2C9": "💊 Be aware of medication metabolism differences and discuss with doctors.",
    "Metabolizer profile CYP2D6": "💊 Understand your medication metabolism profile for personalized dosing.",
    "Metabolizer profile CYP3A5": "💊 Consider medication metabolism when discussing treatments with healthcare providers.",
    "Monocyte count": "🛡️ Support immune health through balanced nutrition and stress management.",
    "Morning circadian rhythm (Morning person)": "🌅 Optimize your schedule to take advantage of morning productivity.",
    "Mouth ulcers": "👄 Maintain good oral hygiene and identify potential dietary triggers.",
    "Nasion prominence": "👃 This is a cosmetic trait that doesn't require lifestyle modifications.",
    "Neuroticisms": "🧘 Practice stress management techniques and consider mindfulness practices.",
    "Neutrophil count": "🛡️ Support immune health through balanced nutrition and regular exercise.",
    "Nicotine dependence after prolonged consumption": "🚭 Consider smoking cessation strategies and seek support if needed.",
    "Permanent tooth eruption": "🦷 Maintain excellent oral hygiene and regular dental care.",
    "Persistence of fetal hemoglobin": "🩸 This trait doesn't require lifestyle modifications.",
    "Photic sneeze reflex": "☀️ Be aware of this reflex and take precautions when driving in bright conditions.",
    "Pigmented rings on the iris": "👁️ This is a cosmetic trait that doesn't require lifestyle modifications.",
    "Probability of having red hair": "🔴 Use appropriate sun protection due to increased skin sensitivity.",
    "Probability of snoring": "😴 Consider sleep position adjustments and maintain healthy weight.",
    "PSA (Prostate Specific Antigen) Levels": "👨 Regular prostate health check-ups and maintain a healthy lifestyle.",
    "QT Intervals": "❤️ Discuss heart health with healthcare providers and maintain cardiovascular fitness.",
    "Red blood cell count": "🩸 Ensure adequate iron intake and maintain overall health through balanced nutrition.",
    "Resistin levels": "⚖️ Focus on maintaining healthy weight and insulin sensitivity through diet and exercise.",
    "Resting heart rate": "❤️ Maintain cardiovascular fitness through regular aerobic exercise.",
    "Risk tendency": "⚠️ Be aware of risk-taking behaviors and make informed decisions.",
    "Secretor status and ABH antigens (FUT2 gene)": "🩸 This trait doesn't require lifestyle modifications.",
    "Selectin E levels": "🔥 Focus on anti-inflammatory lifestyle choices and cardiovascular health.",
    "Serum albumin levels": "🥩 Maintain adequate protein intake and overall nutritional status.",
    "Sex hormone regulation (SHBG)": "⚖️ Maintain hormonal balance through healthy lifestyle and stress management.",
    "Skin melanin levels": "☀️ Use appropriate sun protection based on your skin type.",
    "Sleep duration": "😴 Establish consistent sleep patterns and prioritize adequate rest.",
    "Smell": "👃 Protect your sense of smell by avoiding exposure to harmful chemicals.",
    "Spleen volume": "🫁 Maintain overall health through balanced nutrition and regular exercise.",
    "Telomere length": "⏰ Focus on healthy lifestyle choices that can positively influence aging.",
    "Thyroid function (TSH levels)": "🦋 Monitor thyroid health and maintain balanced nutrition.",
    "Tooth morphology": "🦷 Maintain excellent oral hygiene and regular dental care.",
    "Total serum protein levels": "🥩 Ensure adequate protein intake and maintain overall nutritional status.",
    "Usual walking pace": "🚶 Maintain mobility and consider increasing physical activity gradually.",
    "White blood cell count": "🛡️ Support immune health through balanced nutrition and regular exercise."
};

// Export the recommendation engine and fallback recommendations
window.RecommendationEngine = RecommendationEngine;
window.wellnessRecommendations = wellnessRecommendations;
window.traitsRecommendations = traitsRecommendations;
