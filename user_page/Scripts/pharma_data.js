const pharmaData = [
    {
        name: "Celecoxib (Dosage)",
        action: "Non-steroidal anti-inflammatory drugs",
        definition: "Celecoxib is a selective COX-2 inhibitor NSAID used to treat osteoarthritis, rheumatoid arthritis, and acute pain. It has better gastrointestinal tolerability than traditional NSAIDs but requires careful monitoring of cardiovascular risk.",
      
        genes: "CYP2C9",

    },
    {
        name: "Docetaxel (Adverse effects)",
        action: "Antineoplastics",
        definition: "Docetaxel is a taxane chemotherapy drug used to treat various cancers including breast, lung, and prostate cancer. It works by stabilizing microtubules and preventing cell division.",
        genes: "CYP3A4, ABCB1",

    },
    {
        name: "Efavirenz (Adverse effects)",
        action: "Antivirals",
        definition: "Efavirenz is a non-nucleoside reverse transcriptase inhibitor used to treat HIV infection. It can cause central nervous system side effects and requires careful monitoring.",
       
        genes: "CYP2B6, CYP3A4",

    },
    {
        name: "Fluvastatin (Dosage)",
        action: "Hypolipidemic agents",
        definition: "Fluvastatin is a statin drug used to lower cholesterol levels and prevent cardiovascular disease. It works by inhibiting HMG-CoA reductase.",
       
        genes: "CYP2C9, SLCO1B1",

    },
    {
        name: "Ibuprofen (Dosage)",
        action: "Anti-inflammatory",
        definition: "Ibuprofen is a non-steroidal anti-inflammatory drug used to treat pain, fever, and inflammation. It works by inhibiting cyclooxygenase enzymes.",
     
        genes: "CYP2C9",

    },
    {
        name: "Ivacaftor (Efficacy)",
        action: "Other drugs for the respiratory system",
        definition: "Ivacaftor is a CFTR potentiator used to treat cystic fibrosis in patients with specific CFTR mutations. It improves lung function and reduces pulmonary exacerbations.",
     
        genes: "CFTR",

    },
    {
        name: "Methotrexate (Adverse Reactions)",
        action: "Immunomodulators",
        definition: "Methotrexate is an antimetabolite drug used to treat cancer, autoimmune diseases, and ectopic pregnancy. It can cause serious adverse reactions including myelosuppression and hepatotoxicity.",
      
        genes: "MTHFR, SLC19A1",

    },
    {
        name: "Methotrexate in rheumatoid arthritis (Efficacy)",
        action: "Immunomodulators",
        definition: "Methotrexate is a first-line disease-modifying antirheumatic drug for rheumatoid arthritis. It reduces inflammation and slows disease progression.",
      
        genes: "MTHFR, SLC19A1",

    },
    {
        name: "Olanzapine (Adverse effects)",
        action: "Antipsychotics",
        definition: "Olanzapine is an atypical antipsychotic used to treat schizophrenia and bipolar disorder. It can cause metabolic side effects including weight gain and diabetes.",
      
        genes: "CYP1A2, CYP2D6",

    },
    {
        name: "Olanzapine (Efficacy)",
        action: "Antipsychotics",
        definition: "Olanzapine is effective for treating positive and negative symptoms of schizophrenia and manic episodes in bipolar disorder.",
        
        genes: "CYP1A2, CYP2D6",

    },
    {
        name: "Phenytoin (Dosage)",
        action: "Antiepileptics",
        definition: "Phenytoin is an antiepileptic drug used to control seizures. It has a narrow therapeutic index and requires careful dose monitoring.",
     
        genes: "CYP2C9, CYP2C19",

    },
    {
        name: "Tacrolimus (Dosage)",
        action: "Immunosuppressants",
        definition: "Tacrolimus is a calcineurin inhibitor used to prevent organ rejection after transplantation. It requires therapeutic drug monitoring due to narrow therapeutic range.",
       
        genes: "CYP3A5, ABCB1",

    },
    {
        name: "Thioguanine, Azathioprine, Mercaptopurine (Dosage)",
        action: "Immunosuppressants",
        definition: "These thiopurine drugs are used as immunosuppressants and in cancer treatment. TPMT genetic testing is crucial to prevent severe myelosuppression.",
        
        genes: "TPMT, NUDT15",

    },
    {
        name: "Valproic Acid (Adverse effects)",
        action: "Antiepileptics",
        definition: "Valproic acid is an antiepileptic drug that can cause serious adverse effects including hepatotoxicity, teratogenicity, and pancreatitis.",
    
        genes: "POLG, UGT1A6",

    },
    {
        name: "Warfarin (Adverse Reactions)",
        action: "Antithrombotics",
        definition: "Warfarin is an oral anticoagulant used to prevent blood clots. It has a narrow therapeutic index and requires careful monitoring.",
      
        genes: "VKORC1, CYP2C9",

    },
    {
        name: "Abacavir (Adverse effects)",
        action: "Antivirals",
        definition: "Abacavir is a nucleoside reverse transcriptase inhibitor for HIV treatment. HLA-B*5701 testing is required to prevent hypersensitivity reactions.",
      
        genes: "HLA-B*5701",

    },
    {
        name: "Acenocoumarol, Fenprocoumon (Adverse effects)",
        action: "Antithrombotics",
        definition: "These coumarin anticoagulants are vitamin K antagonists used to prevent blood clots. They require careful monitoring and dose adjustment.",
       
        genes: "VKORC1, CYP2C9",

    },
    {
        name: "Amifampridine (Dosage)",
        action: "Cholinergics",
        definition: "Amifampridine is used to treat Lambert-Eaton myasthenic syndrome. It improves neuromuscular transmission by blocking potassium channels.",
        
        genes: "NAT2",

    },
    {
        name: "Aminoglycoside antibiotics (Adverse effects)",
        action: "Antibiotics",
        definition: "Aminoglycosides are broad-spectrum antibiotics that can cause ototoxicity and nephrotoxicity. MT-RNR1 variants increase ototoxicity risk.",
       
        genes: "MT-RNR1",

    },
    {
        name: "Amitriptyline (Dosage)",
        action: "Antidepressants",
        definition: "Amitriptyline is a tricyclic antidepressant used for depression and chronic pain. CYP2D6 and CYP2C19 variants affect metabolism.",
      
        genes: "CYP2D6, CYP2C19",

    },
    {
        name: "Aripiprazole (Dosage)",
        action: "Antipsychotics",
        definition: "Aripiprazole is an atypical antipsychotic with partial agonist activity at dopamine and serotonin receptors.",
     
        genes: "CYP2D6",

    },
    {
        name: "Atazanavir (Adverse effects)",
        action: "Antivirals",
        definition: "Atazanavir is a protease inhibitor for HIV treatment. UGT1A1 variants can cause hyperbilirubinemia.",
       
        genes: "UGT1A1",

    },
    {
        name: "Atomoxetine (Dosage)",
        action: "Centrally acting psychostimulants",
        definition: "Atomoxetine is a selective norepinephrine reuptake inhibitor used to treat ADHD. CYP2D6 variants affect metabolism and efficacy.",
      
        genes: "CYP2D6",

    },
    {
        name: "Atorvastatin (Dosage)",
        action: "Hypolipidemic agents",
        definition: "Atorvastatin is a statin drug used to lower cholesterol and prevent cardiovascular disease. SLCO1B1 variants affect transport and efficacy.",
       
        genes: "SLCO1B1, CYP3A4",

    },
    {
        name: "Brexpiprazole (Dosage)",
        action: "Antipsychotics",
        definition: "Brexpiprazole is an atypical antipsychotic with partial agonist activity at dopamine and serotonin receptors.",
   
        genes: "CYP2D6, CYP3A4",

    },
    {
        name: "Brivaracetam (Dosage)",
        action: "Anti-acid treatment",
        definition: "Brivaracetam is an antiepileptic drug that binds to synaptic vesicle protein 2A.",

        genes: "CYP2C9",

    },
    {
        name: "Carbamazepine (Dosage)",
        action: "Antiepileptics",
        definition: "Carbamazepine is an antiepileptic drug used to control seizures and treat bipolar disorder. HLA-B*1502 testing is required in certain populations.",
      
        genes: "HLA-B*1502, CYP3A4",

    },
    {
        name: "Citalopram (Dosage)",
        action: "Antidepressants",
        definition: "Citalopram is an SSRI antidepressant used to treat depression and anxiety disorders. CYP2C19 variants affect metabolism.",
       
        genes: "CYP2C19",

    },
    {
        name: "Clobazam (Adverse Reactions)",
        action: "Muscle relaxants",
        definition: "Clobazam is a benzodiazepine used to treat seizures and anxiety. CYP2C19 variants affect metabolism.",
     
        genes: "CYP2C19",

    },
    {
        name: "Clomipramine (Dosage)",
        action: "Antidepressants",
        definition: "Clomipramine is a tricyclic antidepressant used for depression and obsessive-compulsive disorder. CYP2D6 variants affect metabolism.",
      
        genes: "CYP2D6",

    },
    {
        name: "Clopidogrel (Dosage)",
        action: "Antithrombotics",
        definition: "Clopidogrel is an antiplatelet drug used to prevent blood clots. CYP2C19 variants affect activation and efficacy.",
     
        genes: "CYP2C19",

    },
    {
        name: "Codeine (Dosage)",
        action: "Opioid analgesics",
        definition: "Codeine is an opioid pain medication and cough suppressant. CYP2D6 variants affect conversion to morphine and efficacy.",
      
        genes: "CYP2D6",

    },
    {
        name: "Desipramine (Dosage)",
        action: "Antidepressants",
        definition: "Desipramine is a tricyclic antidepressant used for depression and chronic pain. CYP2D6 variants affect metabolism.",
       
        genes: "CYP2D6",

    },
    {
        name: "Diazepam (Adverse Reactions)",
        action: "Anxiolytics",
        definition: "Diazepam is a benzodiazepine used to treat anxiety, seizures, and muscle spasms. CYP2C19 variants affect metabolism.",
     
        genes: "CYP2C19",

    },
    {
        name: "Doxepin (Dosage)",
        action: "Antidepressants",
        definition: "Doxepin is a tricyclic antidepressant used for depression and insomnia. CYP2D6 variants affect metabolism.",
    
        genes: "CYP2D6",

    },
    {
        name: "Escitalopram (Dosage)",
        action: "Antidepressants",
        definition: "Escitalopram is an SSRI antidepressant used to treat depression and anxiety disorders. CYP2C19 variants affect metabolism.",
    
        genes: "CYP2C19",

    },
    {
        name: "Fentanyl (Efficacy)",
        action: "Opioid analgesics",
        definition: "Fentanyl is a potent synthetic opioid used for severe pain management. CYP3A4 variants affect metabolism.",
      
        genes: "CYP3A4",

    },
    {
        name: "Flecainide (Dosage)",
        action: "Antiarrhythmics",
        definition: "Flecainide is a class IC antiarrhythmic agent used to treat atrial fibrillation and ventricular arrhythmias.",
      
        genes: "CYP2D6",

    },
    {
        name: "Floxacillin (Adverse effects)",
        action: "Antibiotics",
        definition: "Floxacillin is a beta-lactam antibiotic used to treat bacterial infections. HLA variants can cause hypersensitivity reactions.",
    
        genes: "HLA variants",

    },
    {
        name: "Fluorouracil, Capecitabine (Dosage)",
        action: "Antineoplastics",
        definition: "These are antimetabolite chemotherapy drugs used to treat various cancers. DPYD variants affect metabolism and toxicity.",
      
        genes: "DPYD",

    },
    {
        name: "Fluvoxamine (Dosage)",
        action: "Antipsychotics",
        definition: "Fluvoxamine is an SSRI antidepressant that inhibits serotonin reuptake. CYP2D6 and CYP1A2 variants affect metabolism.",
        
        genes: "CYP2D6, CYP1A2",

    },
    {
        name: "G6PD Deficiency and Adverse Drug Reactions",
        action: "Multiple pharmacological actions",
        definition: "G6PD deficiency affects the metabolism of various drugs and can cause hemolytic anemia with certain medications.",
    
        genes: "G6PD",

    },
    {
        name: "Haloperidol (Dosage)",
        action: "Antipsychotics",
        definition: "Haloperidol is a first-generation antipsychotic used to treat schizophrenia and other psychotic disorders.",
    
        genes: "CYP2D6",

    },
    {
        name: "Hydrochlorothiazide (Efficacy)",
        action: "Antihypertensives",
        definition: "Hydrochlorothiazide is a thiazide diuretic used to treat hypertension and edema. Genetic variants affect response.",
      
        genes: "Multiple genes",

    },
    {
        name: "Iloperidone (Dosage)",
        action: "Antipsychotics",
        definition: "Iloperidone is an atypical antipsychotic used to treat schizophrenia. CYP2D6 variants affect metabolism.",
      
        genes: "CYP2D6",

    },
    {
        name: "Imipramine (Dosage)",
        action: "Antidepressants",
        definition: "Imipramine is a tricyclic antidepressant used for depression and enuresis. CYP2D6 variants affect metabolism.",
    
        genes: "CYP2D6",

    },
    {
        name: "Inhalation anesthetics and succinylcholine (Adverse Reactions)",
        action: "General anesthetics",
        definition: "These drugs are used for general anesthesia. Genetic variants can cause malignant hyperthermia and other adverse reactions.",
     
        genes: "RYR1, CACNA1S",

    },
    {
        name: "Irinotecan (Adverse effects)",
        action: "Antineoplastics",
        definition: "Irinotecan is a chemotherapy drug used to treat colorectal cancer. UGT1A1 variants affect metabolism and toxicity.",
      
        genes: "UGT1A1",

    },
    {
        name: "Isoniazid (Adverse effects)",
        action: "Antibiotics",
        definition: "Isoniazid is an antibiotic used to treat tuberculosis. NAT2 variants affect metabolism and hepatotoxicity risk.",
    
        genes: "NAT2",

    },
    {
        name: "Lansoprazole, Dexlansoprazole (Dosage)",
        action: "Anti-acid treatment",
        definition: "These are proton pump inhibitors used to treat acid-related gastrointestinal disorders. CYP2C19 variants affect metabolism.",
      
        genes: "CYP2C19",

    },
    {
        name: "Lovastatin (Dosage)",
        action: "Hypolipidemic agents",
        definition: "Lovastatin is a statin drug used to lower cholesterol. SLCO1B1 variants affect transport and myopathy risk.",
      
        genes: "SLCO1B1",

    },
    {
        name: "Lumacaftor + Ivacaftor (Efficacy)",
        action: "Other drugs for the respiratory system",
        definition: "This combination drug is used to treat cystic fibrosis in patients with specific CFTR mutations.",
      
        genes: "CFTR",

    },
    {
        name: "Metoprolol (Dosage)",
        action: "Beta-blockers cardiovascular system",
        definition: "Metoprolol is a beta-blocker used to treat hypertension and heart disease. CYP2D6 variants affect metabolism.",
      
        genes: "CYP2D6",

    },
    {
        name: "Mirtazapine (Adverse Reactions)",
        action: "Antidepressants",
        definition: "Mirtazapine is an atypical antidepressant that acts as a noradrenergic and specific serotonergic antidepressant.",
   
        genes: "CYP1A2, CYP2D6",

    },
    {
        name: "Nortriptyline (Dosage)",
        action: "Antidepressants",
        definition: "Nortriptyline is a tricyclic antidepressant used for depression and chronic pain. CYP2D6 variants affect metabolism.",
       
        genes: "CYP2D6",

    },
    {
        name: "Omeprazole (Dosage)",
        action: "Anti-acid treatment",
        definition: "Omeprazole is a proton pump inhibitor used to treat acid-related gastrointestinal disorders. CYP2C19 variants affect metabolism.",
     
        genes: "CYP2C19",

    },
    {
        name: "Pantoprazole (Dosage)",
        action: "Anti-acid treatment",
        definition: "Pantoprazole is a proton pump inhibitor used to treat acid-related gastrointestinal disorders. CYP2C19 variants affect metabolism.",
     
        genes: "CYP2C19",

    },
    {
        name: "Paroxetin (Dosage)",
        action: "Antidepressants",
        definition: "Paroxetine is an SSRI antidepressant used to treat depression and anxiety disorders. CYP2D6 variants affect metabolism.",
      
        genes: "CYP2D6",

    },
    {
        name: "Peginterferons alfa-2a -2b and ribavirin (Efficacy)",
        action: "Antivirals",
        definition: "These drugs are used to treat chronic hepatitis C. IL28B variants affect response to treatment.",
     
        genes: "IL28B",

    },
    {
        name: "Pimozide (Dosage)",
        action: "Antipsychotics",
        definition: "Pimozide is a first-generation antipsychotic used to treat Tourette syndrome and schizophrenia.",
     
        genes: "CYP2D6",

    },
    {
        name: "Pitavastatin (Dosage)",
        action: "Hypolipidemic agents",
        definition: "Pitavastatin is a statin drug used to lower cholesterol. SLCO1B1 variants affect transport and efficacy.",
       
        genes: "SLCO1B1",

    },
    {
        name: "Pravastatin (Dosage)",
        action: "Hypolipidemic agents",
        definition: "Pravastatin is a statin drug used to lower cholesterol. SLCO1B1 variants affect transport and efficacy.",
      
        genes: "SLCO1B1",

    },
    {
        name: "Quetiapine (Dosage)",
        action: "Antipsychotics",
        definition: "Quetiapine is an atypical antipsychotic used to treat schizophrenia, bipolar disorder, and major depression.",
     
        genes: "CYP3A4, CYP2D6",

    },
    {
        name: "Risperidone (Dosage)",
        action: "Antipsychotics",
        definition: "Risperidone is an atypical antipsychotic used to treat schizophrenia and bipolar disorder. CYP2D6 variants affect metabolism.",
      
        genes: "CYP2D6",

    },
    {
        name: "Rosuvastatin (Dosage)",
        action: "Hypolipidemic agents",
        definition: "Rosuvastatin is a statin drug used to lower cholesterol. SLCO1B1 variants affect transport and efficacy.",
     
        genes: "SLCO1B1",

    },
    {
        name: "Selective Serotonin Reuptake Inhibitors (SSRIs) (Adverse effects)",
        action: "Antidepressants",
        definition: "SSRIs are a class of antidepressants that increase serotonin levels. CYP2D6 and CYP2C19 variants affect metabolism.",
     
        genes: "CYP2D6, CYP2C19",

    },
    {
        name: "Sertraline (Dosage)",
        action: "Antidepressants",
        definition: "Sertraline is an SSRI antidepressant used to treat depression, anxiety, and obsessive-compulsive disorder.",
     
        genes: "CYP2C19, CYP2B6",

    },
    {
        name: "Simvastatin (Dosage)",
        action: "Hypolipidemic agents",
        definition: "Simvastatin is a statin drug used to lower cholesterol. SLCO1B1 variants affect transport and myopathy risk.",
    
        genes: "SLCO1B1",

    },
    {
        name: "Statins (Dosage and risk of myopathy)",
        action: "Hypolipidemic agents",
        definition: "Statins are a class of drugs used to lower cholesterol. SLCO1B1 variants affect transport and myopathy risk.",
      
        genes: "SLCO1B1",

    },
    {
        name: "Tamoxifen (Efficacy)",
        action: "Antipsychotics",
        definition: "Tamoxifen is a selective estrogen receptor modulator used in breast cancer treatment. CYP2D6 variants affect activation and efficacy.",
      
        genes: "CYP2D6",

    },
    {
        name: "Tramadol (Dosage)",
        action: "Opioid analgesics",
        definition: "Tramadol is an opioid pain medication used to treat moderate to severe pain. CYP2D6 variants affect metabolism and efficacy.",
      
        genes: "CYP2D6",

    },
    {
        name: "Trimipramine (Dosage)",
        action: "Antidepressants",
        definition: "Trimipramine is a tricyclic antidepressant used for depression and insomnia. CYP2D6 variants affect metabolism.",
     
        genes: "CYP2D6",

    },
    {
        name: "Venlafaxine (Dosage)",
        action: "Antidepressants",
        definition: "Venlafaxine is a serotonin-norepinephrine reuptake inhibitor used to treat depression and anxiety disorders.",
     
        genes: "CYP2D6, CYP2C19",

    },
    {
        name: "Voriconazole (Dosage)",
        action: "Antifungals",
        definition: "Voriconazole is an antifungal medication used to treat serious fungal infections. CYP2C19 variants affect metabolism.",
       
        genes: "CYP2C19",

    },
    {
        name: "Vortioxetine (Dosage)",
        action: "Antidepressants",
        definition: "Vortioxetine is a multimodal antidepressant that acts on serotonin receptors and inhibits serotonin reuptake.",
      
        genes: "CYP2D6, CYP2C19",

    },
    {
        name: "Zuclopenthixol (Dosage)",
        action: "Antipsychotics",
        definition: "Zuclopenthixol is a first-generation antipsychotic used to treat schizophrenia and other psychotic disorders.",
    
        genes: "CYP2D6",

    }
];
