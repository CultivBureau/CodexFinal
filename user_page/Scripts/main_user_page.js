document.addEventListener('DOMContentLoaded', () => {
    
    // --- Splash Screen Logic ---
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const progressBarInner = document.getElementById('progress-bar-inner');

    setTimeout(() => { progressBarInner.style.width = '100%'; }, 100);
    setTimeout(() => { splashScreen.classList.add('fade-out'); }, 1500);
    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
    }, 1900);

    // --- Main Application Logic ---
    const tabs = document.querySelectorAll('#nav-tabs button');
    const panels = document.querySelectorAll('#content-panels > div');

    // Tab switching logic
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.classList.remove('tab-active');
                t.classList.add('tab-inactive');
            });
            tab.classList.add('tab-active');
            tab.classList.remove('tab-inactive');
            const targetPanelId = tab.dataset.tab + 'Content';
            panels.forEach(panel => {
                panel.id === targetPanelId ? panel.classList.remove('hidden') : panel.classList.add('hidden');
            });
            
            // Re-initialize mobile content for the newly active tab
            const isMobile = window.innerWidth <= 768;
            if (isMobile) {
                setTimeout(() => {
                    const tabName = tab.dataset.tab;
                    if (tabName === 'wellness' && typeof wellnessData !== 'undefined') {
                        createParameterList('wellness-list', 'wellness-details', wellnessData);
                    } else if (tabName === 'traits' && typeof traitsData !== 'undefined') {
                        createParameterList('traits-list', 'traits-details', traitsData);
                    } else if (tabName === 'monogenic' && typeof monogenicData !== 'undefined') {
                        createParameterList('monogenic-list', 'monogenic-details', monogenicData);
                    } else if (tabName === 'complex' && typeof complexData !== 'undefined') {
                        createParameterList('complex-list', 'complex-details', complexData);
                    } else if (tabName === 'pharma' && typeof pharmaData !== 'undefined') {
                        createParameterList('pharma-list', 'pharma-details', pharmaData);
                    }
                }, 100);
            }
            
            // Update risk indicators when complex diseases tab is selected
            if (tab.dataset.tab === 'complex') {

                setTimeout(() => {
                    updateComplexRiskIndicators();
                }, 500);
            }
            
            // Initialize lifestyle recommendations when comprehensive tab is selected
            if (tab.dataset.tab === 'comprehensive') {

                setTimeout(() => {
                        generateComprehensiveLifestyleRecommendations();
                }, 100);
                    }
            

        });
    });
    
    // Handle window resize for mobile/desktop switching
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const isMobile = window.innerWidth <= 768;
            
            // Refresh parameter lists if needed when switching between mobile/desktop
            if (isMobile !== window.wasMobile) {
                window.wasMobile = isMobile;

                
                // Hide/show details containers based on mobile state
                const detailsContainers = ['traits-details', 'wellness-details', 'monogenic-details', 'complex-details', 'pharma-details'];
                detailsContainers.forEach(containerId => {
                    const container = document.getElementById(containerId);
                    if (container) {
                        container.style.display = isMobile ? 'none' : 'block';
                    }
                });
                
                // Refresh current tab's parameter list
                const activeTab = document.querySelector('.tab-active');
                if (activeTab) {
                    const tabName = activeTab.dataset.tab;

                    
                    // Trigger a refresh of the current tab
                    setTimeout(() => {
                        if (tabName === 'wellness' && typeof wellnessData !== 'undefined') {
                            createParameterList('wellness-list', 'wellness-details', wellnessData);
                        } else if (tabName === 'traits' && typeof traitsData !== 'undefined') {
                            createParameterList('traits-list', 'traits-details', traitsData);
                        } else if (tabName === 'monogenic' && typeof monogenicData !== 'undefined') {
                            createParameterList('monogenic-list', 'monogenic-details', monogenicData);
                        } else if (tabName === 'complex' && typeof complexData !== 'undefined') {
                            createParameterList('complex-list', 'complex-details', complexData);
                        } else if (tabName === 'pharma' && typeof pharmaData !== 'undefined') {
                            createParameterList('pharma-list', 'pharma-details', pharmaData);
                        }
                    }, 100);
                }
            }
        }, 250);
    });
    
    // Initialize mobile/desktop state
    window.wasMobile = window.innerWidth <= 768;


    function displayDetails(containerId, item, resultValue = 'N/A', action = null) {
        // Don't display details on mobile - mobile uses dropdown system
        if (window.innerWidth <= 768) return;
        
        const container = document.getElementById(containerId);
        if (!container) return;

        let contentHTML = `
            <div class="space-y-4">
                <h3 class="text-xl font-bold text-gray-800">
                    ${containerId === 'pharma-details' ? `<span class="inline-block w-6 h-6 mr-2 text-lg" style="vertical-align: middle;">${getPharmaIcon(getPharmaType(item.name))}</span>` : ''}${item.name}
                </h3>
                
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
                    
                    <!-- Picture-based Visual Representation -->
                    ${getPictureVisual(containerId, resultValue)}
                </div>
                

                
                                                ${(item.variants || item.loci || item.genes) ? `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                                                            <!-- Definition Column -->
                    <div class="bg-green-50 rounded-lg p-4 border border-green-200 shadow-sm">
                    <h4 class="font-semibold text-green-800 flex items-center mb-2">
                        <i data-lucide="info" class="w-4 h-4 mr-2"></i>
                        Definition
                    </h4>
                    <div class="text-gray-600 text-sm">
                        <div id="definition-${item.name.replace(/\s+/g, '-').toLowerCase()}" class="definition-content">
                            <span class="definition-preview">${(item.definition || 'No definition available.').substring(0, 200)}${(item.definition && item.definition.length > 200) ? '...' : ''}</span>
                            ${(item.definition && item.definition.length > 200) ? `<span class="definition-full hidden">${item.definition}</span>` : ''}
                        </div>
                        ${(item.definition && item.definition.length > 200) ? `
                            <button 
                                onclick="toggleDefinition('${item.name.replace(/\s+/g, '-').toLowerCase()}')" 
                                class="text-green-600 hover:text-green-800 text-sm font-medium mt-2 flex items-center space-x-1 transition-colors duration-200">
                                <span class="read-more-text">Read More</span>
                                <i data-lucide="chevron-down" class="w-4 h-4 read-more-icon"></i>
                            </button>
                        ` : ''}
                    </div>
                </div>
                
                    <!-- Metrics Column -->
                    <div class="space-y-4">
                        ${item.variants ? `
                        <!-- Variants Card -->
                        <div class="bg-green-50 rounded-lg p-4 border border-green-200 shadow-sm">
                            <div class="text-center">
                                <h5 class="text-xs font-medium text-green-700 mb-1">Observed Variants</h5>
                                <p class="font-bold text-sm text-green-800 break-words leading-tight">${item.variants}</p>
                            </div>
                        </div>
                        ` : ''}
                        
                        ${item.loci ? `
                        <!-- Loci Card -->
                        <div class="bg-green-50 rounded-lg p-4 border border-green-200 shadow-sm">
                            <div class="text-center">
                                <h5 class="text-xs font-medium text-green-700 mb-1">Risk Loci</h5>
                                <p class="font-bold text-sm text-green-800 break-words leading-tight">${item.loci}</p>
                            </div>
                        </div>
                        ` : ''}
                        
                        ${item.genes ? `
                        <!-- Genes Card -->
                        <div class="bg-green-50 rounded-lg p-4 border border-green-200 shadow-sm">
                            <div class="text-center">
                                <h5 class="text-xs font-medium text-green-700 mb-1">Genes Analyzed</h5>
                                <div class="text-gray-800 text-sm">
                                    <div id="genes-${item.name.replace(/\s+/g, '-').toLowerCase()}" class="genes-content">
                                        <span class="genes-preview">${item.genes.length > 100 ? item.genes.substring(0, 100) + '...' : item.genes}</span>
                                        ${item.genes.length > 100 ? `<span class="genes-full hidden">${item.genes}</span>` : ''}
                                    </div>
                                    ${item.genes.length > 100 ? `
                                        <button 
                                            onclick="toggleGenes('${item.name.replace(/\s+/g, '-').toLowerCase()}')" 
                                            class="text-green-600 hover:text-green-800 text-xs font-medium mt-2 flex items-center space-x-1 transition-colors duration-200">
                                            <span class="genes-read-more-text">Read More</span>
                                            <i data-lucide="chevron-down" class="w-4 h-4 genes-read-more-icon"></i>
                                        </button>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                        ` : ''}
                        
                        ${(containerId === 'pharma-details' && item.action) ? `
                        <!-- Action Card (for Pharma) -->
                        <div class="bg-green-50 rounded-lg p-4 border border-green-200 shadow-sm">
                            <h4 class="font-semibold text-green-800 flex items-center mb-2">
                                <i data-lucide="activity" class="w-4 h-4 mr-2"></i>
                                Action
                            </h4>
                            <div class="text-gray-700 text-sm">
                                ${item.action}
                    </div>
                </div>
                ` : ''}
                    </div>
                </div>
                                                ` : `
                <div class="space-y-4">
                    <div class="info-box bg-green-50 rounded-lg p-4 border border-green-200 shadow-sm">
                        <h4 class="font-semibold text-green-800 flex items-center mb-2">
                            <i data-lucide="info" class="w-4 h-4 mr-2"></i>
                            Definition
                        </h4>
                        <div class="text-gray-600 text-sm">
                            <div id="definition-${item.name.replace(/\s+/g, '-').toLowerCase()}" class="definition-content">
                                <span class="definition-preview">${(item.definition || 'No definition available.').substring(0, 200)}${(item.definition && item.definition.length > 200) ? '...' : ''}</span>
                                ${(item.definition && item.definition.length > 200) ? `<span class="definition-full hidden">${item.definition}</span>` : ''}
                            </div>
                            ${(item.definition && item.definition.length > 200) ? `
                                <button 
                                    onclick="toggleDefinition('${item.name.replace(/\s+/g, '-').toLowerCase()}')" 
                                    class="text-green-600 hover:text-green-800 text-sm font-medium mt-2 flex items-center space-x-1 transition-colors duration-200">
                                    <span class="read-more-text">Read More</span>
                                    <i data-lucide="chevron-down" class="w-4 h-4 read-more-icon"></i>
                ` : ''}
                        </div>
                    </div>
                    
                    ${(containerId === 'pharma-details' && item.action) ? `
                    <div class="info-box bg-green-50 rounded-lg p-4 border border-green-200 shadow-sm">
                        <h4 class="font-semibold text-green-800 flex items-center mb-2">
                            <i data-lucide="activity" class="w-4 h-4 mr-2"></i>
                            Action
                        </h4>
                        <div class="text-gray-700 text-sm">
                            ${item.action}
                        </div>
                    </div>
                    ` : ''}
                </div>
                `}
        `;

        if (item.bibliography && item.bibliography.length > 0) {
            contentHTML += `<div class="pt-4 mt-4 border-t border-gray-200"><h4 class="font-semibold text-gray-600 flex items-center mb-2 text-sm"><i data-lucide="book-open" class="w-4 h-4 mr-2"></i>Bibliography</h4>`;
            
            // Show first 1 bibliography item by default
            const initialCount = Math.min(1, item.bibliography.length);
            const remainingCount = item.bibliography.length - initialCount;
            
            contentHTML += `<ul class="list-disc list-inside space-y-1" id="bibliography-${item.name.replace(/\s+/g, '-')}">`;
            
            // Show initial items
            for (let i = 0; i < initialCount; i++) {
                contentHTML += `<li class="text-xs text-gray-500">${item.bibliography[i]}</li>`;
            }
            
            // Show remaining items (hidden initially)
            if (remainingCount > 0) {
                for (let i = initialCount; i < item.bibliography.length; i++) {
                    contentHTML += `<li class="text-xs text-gray-500 hidden" id="bib-item-${item.name.replace(/\s+/g, '-')}-${i}">${item.bibliography[i]}</li>`;
                }
            }
            
            contentHTML += `</ul>`;
            
            // Add Read More/Less button if there are more than 1 item
            if (remainingCount > 0) {
                contentHTML += `
                    <button onclick="toggleBibliography('${item.name.replace(/\s+/g, '-')}', ${remainingCount})" 
                            class="text-blue-600 hover:text-blue-800 text-xs mt-2 font-medium transition-colors duration-200"
                            id="bib-toggle-${item.name.replace(/\s+/g, '-')}">
                        Read More (${remainingCount} more)
                    </button>`;
            }
            
            contentHTML += `</div>`;
        }

        contentHTML += `</div>`;
        container.innerHTML = contentHTML;
        lucide.createIcons();
    }

    // Helper function to determine pharmacogenomics type from parameter name
    function getPharmaType(parameterName) {
        if (parameterName.toLowerCase().includes('dosage')) {
            return 'Dosage';
        } else if (parameterName.toLowerCase().includes('efficacy')) {
            return 'Efficacy';
        } else if (parameterName.toLowerCase().includes('adverse') || parameterName.toLowerCase().includes('reactions')) {
            return 'Adverse';
        }
        return 'Unknown';
    }

    // Helper function to get icon for pharmacogenomics type
    function getPharmaIcon(type) {
        switch (type) {
            case 'Dosage':
                return '<i data-lucide="pill" class="w-5 h-5 text-blue-600"></i>'; // Pill icon for dosage
            case 'Efficacy':
                return '<i data-lucide="check-circle" class="w-5 h-5 text-green-600"></i>'; // Checkmark for efficacy
            case 'Adverse':
                return '<i data-lucide="alert-triangle" class="w-5 h-5 text-red-600"></i>'; // Warning icon for adverse effects
            default:
                return '<i data-lucide="help-circle" class="w-5 h-5 text-gray-600"></i>'; // Question mark for unknown
        }
    }

    function createParameterList(listContainerId, detailsContainerId, items) {
        const listContainer = document.getElementById(listContainerId);
        if (!listContainer) return;
        listContainer.innerHTML = ''; // Clear previous list


        // Check if we're on mobile
        const isMobile = window.innerWidth <= 768;


        items.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            
            if (isMobile) {
                // Mobile: Create dropdown-style parameter items with enhanced design
                itemDiv.className = 'parameter-item-mobile p-4 rounded-xl border-l-4 border-transparent cursor-pointer hover:bg-green-50 transition-all duration-300 shadow-sm hover:shadow-lg';
                
                // Add colored risk indicator for complex diseases
                let riskIndicator = '';
                if (listContainerId === 'complex-list') {
                    riskIndicator = '<span class="inline-block w-4 h-4 rounded-full bg-gray-400 mr-3" data-risk-indicator></span>';
                }
                
                // Add type indicator for pharmacogenomics
                let typeIndicator = '';
                if (listContainerId === 'pharma-list') {
                    const type = getPharmaType(item.name);
                    typeIndicator = `<span class="inline-block w-6 h-6 mr-3 text-lg" title="${type}" style="vertical-align: middle;">${getPharmaIcon(type)}</span>`;
                }
                
                // Create mobile parameter header with dropdown arrow
                itemDiv.innerHTML = `
                    <div class="flex items-center justify-between">
                        <div class="flex items-center flex-1">
                            ${riskIndicator}${typeIndicator}
                            <span class="font-semibold text-gray-800 text-sm">${item.name}</span>
                        </div>
                        <div class="flex items-center">
                            <i data-lucide="chevron-down" class="w-5 h-5 text-gray-500 transition-transform transform duration-200"></i>
                        </div>
                    </div>
                `;
                
                // Create mobile content container separately and ensure it's completely hidden
                const mobileContentContainer = document.createElement('div');
                mobileContentContainer.className = 'parameter-content-mobile hidden';
                mobileContentContainer.style.display = 'none';
                mobileContentContainer.style.height = '0';
                mobileContentContainer.style.overflow = 'hidden';
                mobileContentContainer.style.margin = '0';
                mobileContentContainer.style.padding = '0';
                mobileContentContainer.style.border = 'none';
                itemDiv.appendChild(mobileContentContainer);
                
                // Store the original item data for later use
                itemDiv.dataset.itemIndex = index;
                itemDiv.dataset.originalName = item.name;
                itemDiv.dataset.isExpanded = 'false';
                
                itemDiv.addEventListener('click', () => {
                    const isExpanded = itemDiv.dataset.isExpanded === 'true';
                    
                                            // Close all other expanded items
                        listContainer.querySelectorAll('.parameter-item-mobile').forEach(el => {
                            if (el !== itemDiv) {
                                el.dataset.isExpanded = 'false';
                                el.classList.remove('bg-gradient-to-r', 'from-green-50', 'to-emerald-50', 'border-green-300', 'shadow-lg');
                                el.classList.add('border-transparent', 'shadow-sm');
                            
                            const content = el.querySelector('.parameter-content-mobile');
                            if (content) {
                                content.classList.add('hidden');
                                content.style.display = 'none';
                                content.style.height = '0';
                                content.style.overflow = 'hidden';
                                content.style.margin = '0';
                                content.style.padding = '0';
                                content.style.border = 'none';
                            }
                            
                            const chevron = el.querySelector('[data-lucide="chevron-down"]');
                            if (chevron) {
                                chevron.style.transform = 'rotate(0deg)';
                            }
                            

                        }
                    });
                    
                    // Toggle current item
                    if (!isExpanded) {
                        // Expand current item
                        itemDiv.dataset.isExpanded = 'true';
                        itemDiv.classList.add('bg-gradient-to-r', 'from-green-50', 'to-emerald-50', 'border-green-300', 'shadow-lg');
                        itemDiv.classList.remove('border-transparent', 'shadow-sm');
                        
                        const content = itemDiv.querySelector('.parameter-content-mobile');
                        if (content) {
                            // Get the original item data
                            const originalItem = items[index];
                            let resultValue = 'N/A';
                            let action = null;
                            
                            // Check for patient results
                            if (window.patientResultsMap) {
                                const parameterName = originalItem.name;
                                const patientResult = window.patientResultsMap.get(parameterName);
                                if (patientResult) {
                                    resultValue = patientResult.result;
                                    action = patientResult.action;
                                }
                            }
                            
                            // Populate content with mobile-optimized layout
                            content.innerHTML = createMobileParameterContent(originalItem, resultValue, action, detailsContainerId);
                            content.classList.remove('hidden');
                            content.style.display = 'block';
                            content.style.height = 'auto';
                            content.style.overflow = 'visible';
                            content.style.margin = '1rem 0 0 0';
                            content.style.padding = '1rem 0 0 0';
                            content.style.borderTop = '1px solid #e5e7eb';
                            

                            
                            // Initialize Lucide icons for the mobile content
                            setTimeout(() => {
                                lucide.createIcons();
                            }, 50);
                            
                            // Add event listeners for toggle buttons
                            setTimeout(() => {
                                addMobileToggleEventListeners(content);
                            }, 100);
                            
                            // Smooth scroll to center the expanded content on mobile
                            setTimeout(() => {
                                if (window.innerWidth <= 768) { // Mobile only
                                    content.scrollIntoView({ 
                                        behavior: 'smooth', 
                                        block: 'center',
                                        inline: 'nearest'
                                    });
                                }
                            }, 150);
                            

                        }
                        
                        const chevron = itemDiv.querySelector('[data-lucide="chevron-down"]');
                        if (chevron) {
                            chevron.style.transform = 'rotate(180deg)';
                        }
                        

                    } else {
                        // Collapse current item
                        itemDiv.dataset.isExpanded = 'false';
                        itemDiv.classList.remove('bg-gradient-to-r', 'from-green-50', 'to-emerald-50', 'border-green-300', 'shadow-lg');
                        itemDiv.classList.add('border-transparent', 'shadow-sm');
                        
                        const content = itemDiv.querySelector('.parameter-content-mobile');
                        if (content) {
                            content.classList.add('hidden');
                            content.style.display = 'none';
                            content.style.height = '0';
                            content.style.overflow = 'hidden';
                            content.style.margin = '0';
                            content.style.padding = '0';
                            content.style.border = 'none';
                        }
                        
                        const chevron = itemDiv.querySelector('[data-lucide="chevron-down"]');
                        if (chevron) {
                            chevron.style.transform = 'rotate(0deg)';
                        }
                        
                        // Reset the "Tap to expand" text
                        const tapText = itemDiv.querySelector('.text-xs');
                        if (tapText) {
                            tapText.textContent = 'Tap to expand';
                            tapText.className = 'text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full';
                        }
                    }
                });
                
            } else {
                // Desktop: Keep existing behavior unchanged
            itemDiv.className = 'parameter-item p-3 rounded-lg border-l-4 border-transparent';
                
                // Add colored risk indicator for complex diseases
                let riskIndicator = '';
                if (listContainerId === 'complex-list') {
                    riskIndicator = '<span class="inline-block w-4 h-4 rounded-full bg-gray-400 mr-2" data-risk-indicator></span>';
                }
                
                // Add type indicator for pharmacogenomics
                let typeIndicator = '';
                if (listContainerId === 'pharma-list') {
                    const type = getPharmaType(item.name);
                    typeIndicator = `<span class="inline-block w-6 h-6 mr-2 text-lg" title="${type}" style="vertical-align: middle;">${getPharmaIcon(type)}</span>`;
                }
                
                itemDiv.innerHTML = `${riskIndicator}${typeIndicator}${item.name}`;
            
            // Store the original item data for later use
            itemDiv.dataset.itemIndex = index;
                itemDiv.dataset.originalName = item.name; // Store original name
            
            itemDiv.addEventListener('click', () => {
                // Get the original item data
                const originalItem = items[index];
                // Check if this DOM element has patient results
                const hasResults = itemDiv.dataset && itemDiv.dataset.resultValue;
                let resultValue = hasResults ? itemDiv.dataset.resultValue : 'N/A';
                let action = hasResults && itemDiv.dataset.action ? itemDiv.dataset.action : null;
                
                // If no results in dataset, check the global patient results map
                if (resultValue === 'N/A' && window.patientResultsMap) {
                    const parameterName = originalItem.name;
                    const patientResult = window.patientResultsMap.get(parameterName);
                    if (patientResult) {
                        resultValue = patientResult.result;
                        action = patientResult.action;
                    }
                }
                
                displayDetails(detailsContainerId, originalItem, resultValue, action);
                listContainer.querySelectorAll('.parameter-item').forEach(el => el.classList.remove('selected'));
                itemDiv.classList.add('selected');
                    

                });
            
            if (index === 0 && !isMobile) {
                itemDiv.classList.add('selected');
                displayDetails(detailsContainerId, item, 'N/A', null);
                    

                }
            }
            
            listContainer.appendChild(itemDiv);
        });
        
        
        // Update risk indicators for complex diseases if we have patient results
        if (listContainerId === 'complex-list') {
            if (window.patientResultsMap) {
                updateComplexRiskIndicators();
            } else {
            }
        }
        
        // Initialize Lucide icons for pharmacogenomics if needed
        if (listContainerId === 'pharma-list') {
            lucide.createIcons();
        }
    }
    
    // Function to create mobile-optimized parameter content
    function createMobileParameterContent(item, resultValue, action, detailsContainerId) {
        let contentHTML = '';
        
        // Results Section - MOST PROMINENT (Compact mobile design)
        contentHTML += `
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-3 mb-3 shadow-sm">
                <h4 class="font-bold text-green-800 flex items-center mb-2 text-sm">
                    <i data-lucide="check-circle" class="w-4 h-4 mr-2 text-green-600"></i>
                    Your Result
                </h4>
                <div class="text-green-700 text-center mb-2">
                    ${action ? `<p class="mb-1 text-sm font-semibold text-green-800">${action}</p>` : ''}
                    <p class="text-lg font-bold text-green-800 mb-2">${resultValue}</p>
                </div>
                
                <!-- Visual Representation (Curves/Chromosomes) -->
                ${getMobilePictureVisual(detailsContainerId, resultValue)}
            </div>
        `;
        

        
        // Action Section (for pharma) - THIRD PRIORITY
        if (action && detailsContainerId.includes('pharma')) {
            contentHTML += `
                <div class="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 mb-4 shadow-md">
                    <h4 class="font-bold text-amber-800 flex items-center mb-3 text-base">
                        <i data-lucide="alert-triangle" class="w-5 h-5 mr-3 text-amber-600"></i>
                        Action Required
                    </h4>
                    <div class="text-amber-700 text-sm leading-relaxed">
                        ${action}
                    </div>
                </div>
            `;
        }
        
        // Definition Section - LESS PROMINENT (with Read More to show less initially)
        if (item.definition) {
            const shortDefinition = item.definition.length > 120 ? 
                item.definition.substring(0, 120) + '...' : 
                item.definition;
                
            contentHTML += `
                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 mb-4 shadow-md">
                    <h4 class="font-bold text-blue-800 flex items-center mb-3 text-base">
                        <i data-lucide="info" class="w-5 h-5 mr-3 text-blue-600"></i>
                        Definition
                    </h4>
                    <div class="text-blue-700 text-sm leading-relaxed">
                        <span class="definition-preview-mobile">${shortDefinition}</span>
                        ${item.definition.length > 120 ? `
                            <button class="text-blue-600 font-semibold ml-2 underline hover:text-blue-800 transition-colors definition-toggle-btn" 
                                    data-item-id="${item.name.replace(/\s+/g, '-').toLowerCase()}">
                                Read More
                            </button>
                            <span class="definition-full-mobile hidden">${item.definition}</span>
                        ` : ''}
                    </div>
                </div>
            `;
        }
        
        // Metrics Section - LEAST PROMINENT (compact, at the bottom)
        // For pharma, only show genes with Read More functionality
        if (detailsContainerId.includes('pharma')) {
            // Show only first gene initially for pharma
            const genesText = item.genes || 'Multiple genes';
            const firstGene = typeof genesText === 'string' && genesText.includes(',') ? 
                genesText.split(',')[0].trim() : 
                genesText;
            const hasMultipleGenes = typeof genesText === 'string' && genesText.includes(',');
            
            contentHTML += `
                <div class="bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200 rounded-lg p-3 mb-3 shadow-sm">
                    <h4 class="font-bold text-gray-800 flex items-center mb-2 text-sm">
                        <i data-lucide="dna" class="w-4 h-4 mr-2 text-gray-600"></i>
                        Genes Analyzed
                    </h4>
                    <div class="text-sm">
                        <span class="genes-preview-mobile text-gray-800 font-medium">${firstGene}</span>
                        ${hasMultipleGenes ? `
                            <button class="text-blue-600 font-semibold ml-2 underline hover:text-blue-800 transition-colors genes-toggle-btn" 
                                    data-item-id="${item.name.replace(/\s+/g, '-').toLowerCase()}">
                                Read More
                            </button>
                            <span class="genes-full-mobile hidden text-gray-800 font-medium">${genesText}</span>
                        ` : ''}
                    </div>
                </div>
            `;
        } else {
            // Show all metrics for other test types with Read More for genes - Compact mobile design
            const genesText = item.genes || 'Multiple genes';
            const hasMultipleGenes = typeof genesText === 'string' && genesText.includes(',');
            const firstGene = hasMultipleGenes ? genesText.split(',')[0].trim() : genesText;
            
            contentHTML += `
                <div class="bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200 rounded-lg p-3 mb-3 shadow-sm">
                    <h4 class="font-bold text-gray-800 flex items-center mb-2 text-sm">
                        <i data-lucide="bar-chart-3" class="w-4 h-4 mr-2 text-gray-600"></i>
                        Analysis Details
                    </h4>
                    <div class="grid grid-cols-1 gap-1.5 text-xs">
                        <div class="flex justify-between items-center p-2 bg-white rounded border border-gray-100">
                            <span class="text-gray-600 font-medium">Variants:</span>
                            <span class="text-gray-800 font-semibold">${item.variants || 'Multiple'}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 bg-white rounded border border-gray-100">
                            <span class="text-gray-600 font-medium">Risk Loci:</span>
                            <span class="text-gray-800 font-semibold">${item.loci || 'Multiple'}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 bg-white rounded border border-gray-100">
                            <span class="text-gray-600 font-medium">Genes:</span>
                            <div class="text-right">
                                <span class="genes-preview-mobile text-gray-800 font-semibold">${firstGene}</span>
                                ${hasMultipleGenes ? `
                                                                    <button class="text-blue-600 font-semibold ml-2 underline hover:text-blue-800 transition-colors text-xs genes-toggle-btn" 
                                        data-item-id="${item.name.replace(/\s+/g, '-').toLowerCase()}">
                                    Read More
                                </button>
                                    <span class="genes-full-mobile hidden text-gray-800 font-semibold">${genesText}</span>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        return contentHTML;
    }
    
    // Function to toggle mobile definition expansion
    function toggleMobileDefinition(button, itemId) {
        const definitionPreview = button.parentNode.querySelector('.definition-preview-mobile');
        const definitionFull = button.parentNode.querySelector('.definition-full-mobile');
        
        if (definitionFull.classList.contains('hidden')) {
            // Show full definition
            definitionPreview.classList.add('hidden');
            definitionFull.classList.remove('hidden');
            button.textContent = 'Read Less';
            button.className = 'text-blue-600 font-semibold ml-1 underline hover:text-blue-800 transition-colors';
        } else {
            // Show preview only
            definitionPreview.classList.remove('hidden');
            definitionFull.classList.add('hidden');
            button.textContent = 'Read More';
            button.className = 'text-blue-600 font-semibold ml-1 underline hover:text-blue-800 transition-colors';
        }
    }
    
    // Function to toggle mobile genes expansion
    function toggleMobileGenes(button, itemId) {
        const genesPreview = button.parentNode.querySelector('.genes-preview-mobile');
        const genesFull = button.parentNode.querySelector('.genes-full-mobile');
        
        if (genesFull.classList.contains('hidden')) {
            // Show all genes
            genesPreview.classList.add('hidden');
            genesFull.classList.remove('hidden');
            button.textContent = 'Read Less';
            button.className = 'text-blue-600 font-semibold ml-1 underline hover:text-blue-800 transition-colors';
        } else {
            // Show first gene only
            genesPreview.classList.remove('hidden');
            genesFull.classList.add('hidden');
            button.textContent = 'Read More';
            button.className = 'text-blue-600 font-semibold ml-1 underline hover:text-blue-800 transition-colors';
        }
    }
    
    // Function to add event listeners for mobile toggle buttons
    function addMobileToggleEventListeners(contentContainer) {
        // Add event listeners for definition toggle buttons
        const definitionButtons = contentContainer.querySelectorAll('.definition-toggle-btn');
        definitionButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                const itemId = button.dataset.itemId;
                toggleMobileDefinition(button, itemId);
            });
        });
        
        // Add event listeners for genes toggle buttons
        const genesButtons = contentContainer.querySelectorAll('.genes-toggle-btn');
        genesButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                const itemId = button.dataset.itemId;
                toggleMobileGenes(button, itemId);
            });
        });
    }
    
    // Function to update risk indicators with proper colors
    function updateComplexRiskIndicators() {
        const complexList = document.getElementById('complex-list');
        if (!complexList) {
            return;
        }
        
        
        if (window.patientResultsMap) {
            for (let [key, value] of window.patientResultsMap.entries()) {
            }
        }
        
        const parameterItems = complexList.querySelectorAll('.parameter-item');
        
        if (parameterItems.length === 0) {
            return;
        }
        
        parameterItems.forEach((item, index) => {
            const riskIndicator = item.querySelector('[data-risk-indicator]');
            if (!riskIndicator) {
                return;
            }
            
            // Get parameter name from the dataset or text content
            let parameterName = item.dataset.originalName || item.textContent.replace(/●/, '').trim();
            
            // Check if we have patient results
            if (window.patientResultsMap && window.patientResultsMap.size > 0) {
                // Try to find the result by exact name match first
                let patientResult = window.patientResultsMap.get(parameterName);
                
                // If not found, try to find by partial match
                if (!patientResult) {
                    for (let [key, value] of window.patientResultsMap.entries()) {
                        if (key.includes(parameterName) || parameterName.includes(key)) {
                            patientResult = value;
                            break;
                        }
                    }
                }
                
                
                if (patientResult && patientResult.result) {
                    const riskLevel = getRiskLevelFromResult(patientResult.result);
                    const riskColor = getRiskColorForIndicator(riskLevel);
                    
                    // Update the risk indicator with proper color
                    riskIndicator.className = `inline-block w-4 h-4 rounded-full mr-2 ${riskColor}`;
                } else {
                    // Default to gray if no result
                    riskIndicator.className = 'inline-block w-4 h-4 rounded-full mr-2 bg-gray-400';
                }
            } else {
                // Default to gray if no patient results map
                riskIndicator.className = 'inline-block w-4 h-4 rounded-full mr-2 bg-gray-400';
            }
        });
        
    }
    
    // Helper function to determine risk level from result text
    function getRiskLevelFromResult(resultText) {
        const lowerResult = resultText.toLowerCase();
        if (lowerResult.includes('low') || lowerResult.includes('decreased') || lowerResult.includes('reduced')) {
            return 'low';
        } else if (lowerResult.includes('high') || lowerResult.includes('elevated') || lowerResult.includes('increased')) {
            return 'high';
        } else if (lowerResult.includes('medium') || lowerResult.includes('average') || lowerResult.includes('normal')) {
            return 'medium';
        } else {
            return 'medium'; // Default to medium for unknown results
        }
    }
    
    // Helper function to get CSS classes for risk colors
    function getRiskColorForIndicator(riskLevel) {
        switch (riskLevel) {
            case 'low': return 'bg-green-500';
            case 'high': return 'bg-red-500';
            case 'medium': return 'bg-orange-500';
            default: return 'bg-orange-500';
        }
    }
    
    function setupSearch(inputId, listContainerId) {
        const searchInput = document.getElementById(inputId);
        const listContainer = document.getElementById(listContainerId);
        
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const items = listContainer.querySelectorAll('.parameter-item');
            items.forEach(item => {
                const itemName = item.textContent.toLowerCase();
                item.style.display = itemName.includes(searchTerm) ? 'block' : 'none';
            });
        });

        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const firstVisibleItem = listContainer.querySelector('.parameter-item[style*="block"]');
                if (firstVisibleItem) firstVisibleItem.click();
            }
        });
    }

    // Function to populate all parameter lists
    function populateAllParameterLists() {
        
        // Check if data files are loaded
        
        // Populate Wellness list
        if (typeof wellnessData !== 'undefined') {
            createParameterList('wellness-list', 'wellness-details', wellnessData);
        } else {
        }
        
        // Populate Traits list
        if (typeof traitsData !== 'undefined') {
            createParameterList('traits-list', 'traits-details', traitsData);
        } else {
        }
        
        // Populate Monogenic list
        if (typeof monogenicData !== 'undefined') {
            createParameterList('monogenic-list', 'monogenic-details', monogenicData);
        } else {
        }
        
        // Populate Complex list
        if (typeof complexData !== 'undefined') {
            createParameterList('complex-list', 'complex-details', complexData);
        } else {
        }
        
        // Populate Pharma list
        if (typeof pharmaData !== 'undefined') {
            createParameterList('pharma-list', 'pharma-details', pharmaData);
        } else {
        }
        
        // Hide details containers on mobile
        if (window.innerWidth <= 768) {
            const detailsContainers = ['traits-details', 'wellness-details', 'monogenic-details', 'complex-details', 'pharma-details'];
            detailsContainers.forEach(containerId => {
                const container = document.getElementById(containerId);
                if (container) {
                    container.style.display = 'none';
                }
            });
        }
    }

    // --- INVOCATION ---
    
    // Populate all parameter lists with static data
    populateAllParameterLists();
    
    // Initialize search bars for all tabs
    setupSearch('traits-search', 'traits-list');
    setupSearch('wellness-search', 'wellness-list');
    setupSearch('monogenic-search', 'monogenic-list');
    setupSearch('complex-search', 'complex-list');
    setupSearch('pharma-search', 'pharma-search');

    // Disable copy/paste functionality
    disableCopyPaste();

    lucide.createIcons();
    
    // Make updateComplexRiskIndicators available globally for testing
    window.updateComplexRiskIndicators = updateComplexRiskIndicators;
    
    // Add a debug function to check patient results
    window.debugPatientResults = function() {
        if (window.patientResultsMap) {
            for (let [key, value] of window.patientResultsMap.entries()) {
            }
        }
    };
    
    // Add a function to manually test risk indicators
    window.testRiskIndicators = function() {
        
        // Check if complex list exists
        const complexList = document.getElementById('complex-list');
        if (!complexList) {
            return;
        }
        
        // Check parameter items
        const parameterItems = complexList.querySelectorAll('.parameter-item');
        
        // Check risk indicators
        const riskIndicators = complexList.querySelectorAll('[data-risk-indicator]');
        
        // Show first few items
        parameterItems.forEach((item, index) => {
            if (index < 5) {
                const riskIndicator = item.querySelector('[data-risk-indicator]');
                const name = item.dataset.originalName || item.textContent;
            }
        });
        
    };
    
    // Add a function to force update risk indicators
    window.forceUpdateRiskIndicators = function() {
        updateComplexRiskIndicators();
    };
});

// Function to toggle definition read more/less
function toggleDefinition(definitionId) {
    const definitionContent = document.getElementById(`definition-${definitionId}`);
    if (!definitionContent) return;
    
    const preview = definitionContent.querySelector('.definition-preview');
    const full = definitionContent.querySelector('.definition-full');
    const button = definitionContent.parentElement.querySelector('button');
    const readMoreText = button.querySelector('.read-more-text');
    const readMoreIcon = button.querySelector('.read-more-icon');
    
    if (full.classList.contains('hidden')) {
        // Show full definition
        preview.classList.add('hidden');
        full.classList.remove('hidden');
        readMoreText.textContent = 'Read Less';
        readMoreIcon.innerHTML = '<i data-lucide="chevron-up" class="w-4 h-4"></i>';
        lucide.createIcons(); // Re-render the icon
    } else {
        // Show preview
        preview.classList.remove('hidden');
        full.classList.add('hidden');
        readMoreText.textContent = 'Read More';
        readMoreIcon.innerHTML = '<i data-lucide="chevron-down" class="w-4 h-4"></i>';
        lucide.createIcons(); // Re-render the icon
    }
}

// Function to toggle genes read more/less
function toggleGenes(genesId) {
    const genesContent = document.getElementById(`genes-${genesId}`);
    if (!genesContent) return;
    
    const preview = genesContent.querySelector('.genes-preview');
    const full = genesContent.querySelector('.genes-full');
    const button = genesContent.parentElement.querySelector('button');
    const readMoreText = button.querySelector('.genes-read-more-text');
    const readMoreIcon = button.querySelector('.genes-read-more-icon');
    
    if (full.classList.contains('hidden')) {
        // Show full genes
        preview.classList.add('hidden');
        full.classList.remove('hidden');
        readMoreText.textContent = 'Read Less';
        readMoreIcon.innerHTML = '<i data-lucide="chevron-up" class="w-4 h-4"></i>';
        lucide.createIcons(); // Re-render the icon
    } else {
        // Show preview
        preview.classList.remove('hidden');
        full.classList.add('hidden');
        readMoreText.textContent = 'Read More';
        readMoreIcon.innerHTML = '<i data-lucide="chevron-down" class="w-4 h-4"></i>';
        lucide.createIcons(); // Re-render the icon
    }
}

// Function to toggle bibliography read more/less
function toggleBibliography(parameterName, remainingCount) {
    const button = document.getElementById(`bib-toggle-${parameterName}`);
    if (!button) return;
    
    const isExpanded = button.textContent.includes('Read Less');
    
    if (isExpanded) {
        // Collapse - hide remaining items
        for (let i = 1; i < 1 + remainingCount; i++) {
            const item = document.getElementById(`bib-item-${parameterName}-${i}`);
            if (item) item.classList.add('hidden');
        }
        button.textContent = `Read More (${remainingCount} more)`;
        button.classList.remove('text-blue-600');
        button.classList.add('text-blue-500');
    } else {
        // Expand - show all items
        for (let i = 1; i < 1 + remainingCount; i++) {
            const item = document.getElementById(`bib-item-${parameterName}-${i}`);
            if (item) item.classList.remove('hidden');
        }
        button.textContent = 'Read Less';
        button.classList.remove('text-blue-500');
        button.classList.add('text-blue-600');
    }
}

function getPictureVisual(containerId, resultValue) {
    let visualHTML = '';
    
    // Determine test type based on container ID
    let testType = '';
    if (containerId === 'complex-details') testType = 'Complex';
    else if (containerId === 'wellness-details') testType = 'Wellness';
    else if (containerId === 'traits-details') testType = 'Traits';
    else if (containerId === 'monogenic-details') testType = 'Monogenic';
    
    if (testType === 'Complex' || testType === 'Wellness' || testType === 'Traits') {
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
    } else if (testType === 'Monogenic') {
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

    // Function to get mobile-optimized picture visual
    function getMobilePictureVisual(containerId, resultValue) {
        let visualHTML = '';
        
        // Determine test type based on container ID
        let testType = '';
        if (containerId === 'complex-details') testType = 'Complex';
        else if (containerId === 'wellness-details') testType = 'Wellness';
        else if (containerId === 'traits-details') testType = 'Traits';
        else if (containerId === 'monogenic-details') testType = 'Monogenic';
        
        if (testType === 'Complex' || testType === 'Wellness' || testType === 'Traits') {
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
                <div class="mt-3">
                    <h5 class="font-semibold text-gray-700 mb-2 text-sm flex items-center justify-center">
                        <i data-lucide="bar-chart-3" class="w-4 h-4 mr-2"></i>
                        Results Distribution
                    </h5>
                    <div class="flex justify-center items-center bg-white rounded-lg border p-3 shadow-sm">
                        <img src="${imagePath}" alt="${altText}" class="w-full max-w-xs mx-auto" onerror="this.style.display='none'">
                    </div>
                </div>
            `;
        } else if (testType === 'Monogenic') {
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
                <div class="mt-3">
                    <h5 class="font-semibold text-gray-700 mb-2 text-sm flex items-center justify-center">
                        <i data-lucide="dna" class="w-4 h-4 mr-2"></i>
                        Genetic Variant Status
                    </h5>
                    <div class="flex justify-center items-center bg-white rounded-lg border p-3 shadow-sm">
                        <img src="${imagePath}" alt="${altText}" class="w-24 h-24 object-contain mx-auto" onerror="this.style.display='none'">
                    </div>
                </div>
            `;
        }
        
        return visualHTML;
    }



































    


// Function to disable copy/paste functionality
function disableCopyPaste() {
    // Disable context menu (right-click)
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Disable copy (Ctrl+C, Cmd+C)
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
            e.preventDefault();
            showCopyProtectionMessage();
            return false;
        }
        
        // Disable cut (Ctrl+X, Cmd+X)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'x' || e.key === 'X')) {
            e.preventDefault();
            showCopyProtectionMessage();
            return false;
        }
        
        // Disable paste (Ctrl+V, Cmd+V)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'v' || e.key === 'V')) {
            e.preventDefault();
            showCopyProtectionMessage();
            return false;
        }
        
        // Disable select all (Ctrl+A, Cmd+A)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'a' || e.key === 'A')) {
            e.preventDefault();
            showCopyProtectionMessage();
            return false;
        }
    });
    
    // Disable drag and drop
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Disable text selection via mouse
    document.addEventListener('mousedown', function(e) {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && !e.target.hasAttribute('contenteditable')) {
            e.preventDefault();
            return false;
        }
    });
    
    // Disable text selection via touch
    document.addEventListener('touchstart', function(e) {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && !e.target.hasAttribute('contenteditable')) {
            e.preventDefault();
            return false;
        }
        return true;
    });
    
    // Show message when user tries to copy
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        showCopyProtectionMessage();
        return false;
    });
    
    // Show message when user tries to paste
    document.addEventListener('paste', function(e) {
        e.preventDefault();
        showCopyProtectionMessage();
        return false;
    });
}

// Function to show copy protection message
function showCopyProtectionMessage() {
    // Create a temporary message element
    const message = document.createElement('div');
    message.innerHTML = `
        <div class="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center space-x-2">
            <i data-lucide="shield" class="w-5 h-5"></i>
            <span>Copying content is not allowed</span>
        </div>
    `;
    
    document.body.appendChild(message);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        if (message.parentNode) {
            message.parentNode.removeChild(message);
        }
    }, 3000);
    
    // Re-render icons
    lucide.createIcons();
}

// ==================== RECOMMENDATION SYSTEM ====================

// Global storage for recommendations
window.systemRecommendations = { traits: [], wellness: [] };

// API Key for AI recommendations - UPDATE THIS WITH YOUR VALID API KEY
const AI_API_KEY = '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';

// Test function to verify API key
async function testAPIKey() {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${AI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: "Hello, this is a test." }],
                max_tokens: 10
            })
        });
                    
                    if (response.ok) {
                return true;
            } else {
            const error = await response.json();
                return false;
            }
        } catch (error) {
            return false;
        }
    }

// Make test function available globally
window.testAPIKey = testAPIKey;

// Generate comprehensive lifestyle recommendations
async function generateComprehensiveLifestyleRecommendations() {
    const comprehensivePanel = document.getElementById('comprehensive-recommendations');
    if (!comprehensivePanel) return;

                comprehensivePanel.innerHTML = `
        <div class="space-y-2 md:space-y-8">
            <!-- General Recommendations Section -->
            <div class="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border-2 border-green-200 rounded-lg md:rounded-2xl p-2 md:p-6 shadow-lg">
                <h4 class="font-bold text-sm md:text-xl text-green-800 flex items-center mb-2 md:mb-4">
                    <i data-lucide="leaf" class="w-4 h-4 md:w-6 md:h-6 mr-1.5 md:mr-3 text-green-600 flex-shrink-0"></i>
                    <span class="text-xs md:text-base">General Lifestyle Recommendations</span>
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <!-- Recommended Foods -->
                    <div class="bg-white/50 rounded-lg p-3 md:p-4 border border-green-300">
                        <h5 class="font-bold text-xs md:text-lg text-green-700 mb-2 md:mb-3 flex items-center">
                            <i data-lucide="apple" class="w-3 h-3 md:w-5 md:h-5 mr-1.5 md:mr-2 text-green-600"></i>
                            Recommended Foods
                        </h5>
                        <ul class="list-disc list-inside text-green-800 space-y-1 md:space-y-1.5 text-xs md:text-sm">
                            <li><strong>Gluten-Free Alternatives:</strong> Quinoa, brown rice, corn, buckwheat</li>
                            <li><strong>Omega-3 Rich Foods:</strong> Fatty fish (salmon, mackerel), walnuts, flaxseeds</li>
                            <li><strong>Antioxidants:</strong> Berries, leafy greens, colorful vegetables</li>
                            <li><strong>Lean Proteins:</strong> Fish, chicken breast, legumes, tofu</li>
                            <li><strong>Healthy Fats:</strong> Avocados, nuts, olive oil, coconut oil</li>
                            <li><strong>Fiber-Rich:</strong> Whole grains, fruits, vegetables, beans</li>
                            <li><strong>Hydration:</strong> 8-10 glasses of water daily, herbal teas</li>
                        </ul>
                </div>

                    <!-- Foods to Limit -->
                    <div class="bg-white/50 rounded-lg p-3 md:p-4 border border-red-300">
                        <h5 class="font-bold text-xs md:text-lg text-red-700 mb-2 md:mb-3 flex items-center">
                            <i data-lucide="x-circle" class="w-3 h-3 md:w-5 md:h-5 mr-1.5 md:mr-2 text-red-600"></i>
                            Foods to Limit
                        </h5>
                        <ul class="list-disc list-inside text-red-800 space-y-1 md:space-y-1.5 text-xs md:text-sm">
                            <li><strong>Gluten Containing Foods:</strong> Wheat, barley, rye products</li>
                            <li><strong>Processed Sugars:</strong> Sodas, candies, pastries, desserts</li>
                            <li><strong>High Sodium Foods:</strong> Processed meals, canned foods, fast food</li>
                            <li><strong>Trans Fats:</strong> Fried foods, margarine, processed snacks</li>
                            <li><strong>Artificial Additives:</strong> Preservatives, artificial colors, flavors</li>
                            <li><strong>Excessive Caffeine:</strong> Limit to 2-3 cups of coffee daily</li>
                            <li><strong>Alcohol:</strong> Moderate consumption, avoid excessive intake</li>
                        </ul>
            </div>
                </div>

                <!-- Sports & Exercise Section -->
                <div class="bg-white/50 rounded-lg p-3 md:p-4 border border-blue-300 mt-4 md:mt-6">
                    <h5 class="font-bold text-xs md:text-lg text-blue-700 mb-2 md:mb-3 flex items-center">
                        <i data-lucide="activity" class="w-3 h-3 md:w-5 md:h-5 mr-1.5 md:mr-2 text-blue-600"></i>
                        Sports & Exercise
                    </h5>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div>
                            <h6 class="font-semibold text-blue-800 text-xs md:text-base mb-1 md:mb-2">Cardiovascular Exercise</h6>
                            <ul class="list-disc list-inside text-blue-800 space-y-0.5 md:space-y-1 text-xs md:text-sm">
                                <li><strong>Frequency:</strong> 150 minutes moderate or 75 minutes vigorous weekly</li>
                                <li><strong>Activities:</strong> Walking, swimming, cycling, dancing, jogging</li>
                                <li><strong>Intensity:</strong> Moderate (can talk but not sing) to vigorous</li>
                            </ul>
            </div>
                        <div>
                            <h6 class="font-semibold text-blue-800 text-xs md:text-base mb-1 md:mb-2">Strength & Flexibility</h6>
                            <ul class="list-disc list-inside text-blue-800 space-y-0.5 md:space-y-1 text-xs md:text-sm">
                                <li><strong>Strength Training:</strong> 2-3 times per week, all major muscle groups</li>
                                <li><strong>Flexibility:</strong> Daily stretching or yoga sessions</li>
                                <li><strong>Recovery:</strong> 7-9 hours quality sleep, rest days between intense workouts</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Daily Routine Section -->
                <div class="bg-white/50 rounded-lg p-3 md:p-4 border border-purple-300 mt-4 md:mt-6">
                    <h5 class="font-bold text-xs md:text-lg text-purple-700 mb-2 md:mb-3 flex items-center">
                        <i data-lucide="clock" class="w-3 h-3 md:w-5 md:h-5 mr-1.5 md:mr-2 text-purple-600"></i>
                        Daily Routine Recommendations
                    </h5>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                        <div class="text-center md:text-left">
                            <h6 class="font-semibold text-purple-800 text-xs md:text-sm mb-1">Morning (7-9 AM)</h6>
                            <p class="text-purple-800 text-xs md:text-sm">Start with water and a protein-rich breakfast. Include fruits and whole grains.</p>
                </div>
                        <div class="text-center md:text-left">
                            <h6 class="font-semibold text-purple-800 text-xs md:text-sm mb-1">Afternoon (12-2 PM)</h6>
                            <p class="text-purple-800 text-xs md:text-sm">Have a balanced lunch with vegetables, lean protein, and healthy fats.</p>
                        </div>
                        <div class="text-center md:text-left">
                            <h6 class="font-semibold text-purple-800 text-xs md:text-sm mb-1">Evening (5-7 PM)</h6>
                            <p class="text-purple-800 text-xs md:text-sm">Engage in 30-45 minutes of moderate exercise or physical activity.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Results Area -->
            <div id="ai-recommendations-results" class="space-y-2 md:space-y-6">
                <div class="text-center p-2 md:p-8 bg-gray-50 rounded-lg">
                    <p class="text-gray-600 text-xs md:text-base">Loading personalized recommendations...</p>
                </div>
            </div>
            </div>
        `;

        // Re-render Lucide icons
        lucide.createIcons();
    
    // Automatically generate recommendations
    setTimeout(() => {
        handleGenerateAIRecommendations();
    }, 500);
}

// Handle AI recommendations generation
async function handleGenerateAIRecommendations() {
    const resultsArea = document.getElementById('ai-recommendations-results');
    
        // Show loading message
    resultsArea.innerHTML = `
        <div class="text-center p-4 md:p-8 bg-gray-50 rounded-lg">
            <div class="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3">
                <i data-lucide="loader-2" class="w-5 h-5 md:w-6 md:h-6 animate-spin text-blue-600"></i>
                <p class="text-gray-600 text-sm md:text-base text-center">AI is analyzing your genetic results and generating personalized recommendations...</p>
                </div>
            </div>
        `;
        lucide.createIcons();

    try {
                // Collect patient data in the same order as the data files
        const wellnessResults = [];
        const traitsResults = [];
        
        // First, collect traits in the same order as traitsData
        if (typeof traitsData !== 'undefined') {
            traitsData.forEach(trait => {
                if (window.patientResultsMap && window.patientResultsMap.has(trait.name)) {
                    const value = window.patientResultsMap.get(trait.name);
                    traitsResults.push({ name: trait.name, result: value.result });
                }
            });
        }
        
        // Then, collect wellness in the same order as wellnessData
        if (typeof wellnessData !== 'undefined') {
            wellnessData.forEach(wellness => {
                if (window.patientResultsMap && window.patientResultsMap.has(wellness.name)) {
                    const value = window.patientResultsMap.get(wellness.name);
                    wellnessResults.push({ name: wellness.name, result: value.result });
                }
            });
        }

        // Generate AI recommendations for both categories
        const [wellnessRecs, traitsRecs] = await Promise.all([
            getAIRecommendations('Wellness', wellnessResults),
            getAIRecommendations('Traits', traitsResults)
        ]);

        // Store results globally
        window.systemRecommendations = {
            traits: traitsRecs,
            wellness: wellnessRecs
        };

        // Render the results
        renderRecommendationTables();

    } catch (error) {
        
        // Check if it's an API key error
        if (error.message.includes('API key') || error.message.includes('401')) {
            // Show sample recommendations as fallback
            showSampleRecommendations();
        } else {
            resultsArea.innerHTML = `
                <div class="text-center p-8 bg-red-50 rounded-lg border border-red-200">
                    <p class="text-red-700 font-semibold">Error: ${error.message}</p>
                </div>
            `;
        }
    } finally {
        // Recommendations generation completed
    }
}

// Get AI recommendations from OpenAI
async function getAIRecommendations(category, results) {
    if (results.length === 0) return [];

    const systemPrompt = `You are a genetic health and lifestyle coach. Provide concise, actionable advice based on genetic test results. 
    YOU MUST RESPOND WITH A VALID JSON OBJECT containing a single key (e.g., 'wellness_recommendations' or 'traits_recommendations') 
    whose value is an array of objects. Each object must have three keys: 'name', 'result', and 'recommendation'.`;

    const userPrompt = `For the following genetic ${category} results, provide a personalized recommendation for each:
    ${JSON.stringify(results)}`;

            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
            'Authorization': `Bearer ${AI_API_KEY}`
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt }
            ],
            response_format: { "type": "json_object" }
                })
            });

            if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'API request failed');
            }

            const data = await response.json();
    const content = JSON.parse(data.choices[0].message.content);
    
    // Return the first (and only) array from the parsed JSON object
    return Object.values(content)[0] || [];
}

// Helper function to categorize parameters based on the actual data files
function isTraitParameter(parameterName) {
    // Check if parameter exists in traitsData
    if (typeof traitsData !== 'undefined') {
        return traitsData.some(trait => trait.name === parameterName);
    }
    
    // Fallback: check common trait keywords
    const lowerName = parameterName.toLowerCase();
    const traitKeywords = [
        'acne', 'alcohol', 'asparagus', 'bitter taste', 'caffeine', 'lactose', 
        'gluten', 'height', 'hair', 'baldness', 'eye', 'facial', 'cognitive', 
        'mental', 'metabolizer', 'gene', 'mthfr', 'comt', 'preference', 
        'profile', 'endurance', 'damage', 'intolerance', 'allergy', 'sensitivity', 
        'response', 'farmer-hunter', 'myoadenylate', 'tendinopathies', 'flush',
        'aminotransferase', 'alanine', 'aspartate', 'creatinine', 'urea',
        'bilirubin', 'alkaline', 'phosphatase', 'gamma', 'glutamyl', 'transferase'
    ];
    return traitKeywords.some(keyword => lowerName.includes(keyword));
}

// Helper function to check if parameter is wellness
function isWellnessParameter(parameterName) {
    // Check if parameter exists in wellnessData
    if (typeof wellnessData !== 'undefined') {
        return wellnessData.some(wellness => wellness.name === parameterName);
    }
    
    // Fallback: check common wellness keywords
    const lowerName = parameterName.toLowerCase();
    const wellnessKeywords = [
        'antioxidant', 'apolipoprotein', 'bitter taste', 'caffeine', 'lactose',
        'gluten', 'vitamin', 'nutrient', 'metabolism', 'immune', 'inflammation', 
        'oxidative', 'omega', 'fatty acid', 'protein', 'carbohydrate', 'fiber',
        'mineral', 'electrolyte', 'hormone', 'enzyme', 'detoxification', 'methylation',
        'folate', 'b12', 'iron', 'calcium', 'magnesium', 'zinc', 'selenium',
        'copper', 'manganese', 'chromium', 'molybdenum', 'iodine', 'phosphorus',
        'potassium', 'sodium', 'chloride', 'sulfur', 'boron', 'silicon', 'vanadium',
        'cholesterol', 'triglyceride', 'hdl', 'ldl', 'glucose', 'insulin',
        'hemoglobin', 'hematocrit', 'platelet', 'white blood', 'red blood'
    ];
    return wellnessKeywords.some(keyword => lowerName.includes(keyword));
}

// Render the recommendation tables
function renderRecommendationTables() {
    const resultsArea = document.getElementById('ai-recommendations-results');
    const { traits, wellness } = window.systemRecommendations;

        // Build traits table with perfect mobile layout
    let traitsTableHTML = `
        <div class="overflow-x-auto -mx-1 md:mx-0">
            <table class="w-full text-xs md:text-sm text-left" style="min-width: 600px;">
                <thead class="bg-blue-100/80">
                    <tr class="border-b border-blue-200">
                        <th class="p-1.5 md:p-3 font-semibold text-blue-900 text-xs md:text-sm" style="width: 25%; min-width: 120px;">Parameter</th>
                        <th class="p-1.5 md:p-3 font-semibold text-blue-900 text-xs md:text-sm" style="width: 20%; min-width: 80px;">Result</th>
                        <th class="p-1.5 md:p-3 font-semibold text-blue-900 text-xs md:text-sm" style="width: 55%; min-width: 200px;">Recommendation</th>
                        </tr>
                    </thead>
                <tbody>`;

        if (traits.length > 0) {
        traits.forEach(item => {
            traitsTableHTML += `
                <tr class="border-t border-blue-200 hover:bg-blue-50/50">
                    <td class="p-1.5 md:p-3 font-medium text-blue-900 text-xs md:text-sm break-words align-top">${item.name}</td>
                    <td class="p-1.5 md:p-3 text-gray-700 text-xs md:text-sm break-words align-top">${item.result}</td>
                    <td class="p-1.5 md:p-3 text-blue-800 text-xs md:text-sm break-words leading-relaxed align-top">${item.recommendation}</td>
                </tr>`;
                    });
                } else {
        traitsTableHTML += `
            <tr>
                <td colspan="3" class="p-4 text-center text-gray-500 text-xs md:text-sm">No trait recommendations available.</td>
            </tr>`;
    }
    traitsTableHTML += `</tbody></table></div>`;

        // Build wellness table with perfect mobile layout
    let wellnessTableHTML = `
        <div class="overflow-x-auto -mx-1 md:mx-0">
            <table class="w-full text-xs md:text-sm text-left" style="min-width: 600px;">
                <thead class="bg-green-100/80">
                    <tr class="border-b border-green-200">
                        <th class="p-1.5 md:p-3 font-semibold text-green-900 text-xs md:text-sm" style="width: 25%; min-width: 120px;">Parameter</th>
                        <th class="p-1.5 md:p-3 font-semibold text-green-900 text-xs md:text-sm" style="width: 20%; min-width: 80px;">Result</th>
                        <th class="p-1.5 md:p-3 font-semibold text-green-900 text-xs md:text-sm" style="width: 55%; min-width: 200px;">Recommendation</th>
                    </tr>
                </thead>
                <tbody>`;

        if (wellness.length > 0) {
        wellness.forEach(item => {
            wellnessTableHTML += `
                <tr class="border-t border-green-200 hover:bg-green-50/50">
                    <td class="p-1.5 md:p-3 font-medium text-green-900 text-xs md:text-sm break-words align-top">${item.name}</td>
                    <td class="p-1.5 md:p-3 text-gray-700 text-xs md:text-sm break-words align-top">${item.result}</td>
                    <td class="p-1.5 md:p-3 text-green-800 text-xs md:text-sm break-words leading-relaxed align-top">${item.recommendation}</td>
                </tr>`;
        });
        } else {
        wellnessTableHTML += `
            <tr>
                <td colspan="3" class="p-4 text-center text-gray-500 text-xs md:text-sm">No wellness recommendations available.</td>
            </tr>`;
    }
    wellnessTableHTML += `</tbody></table></div>`;

        // Render the complete results
    resultsArea.innerHTML = `
        <!-- Traits Recommendations -->
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-200 rounded-lg md:rounded-2xl p-2 md:p-6 shadow-lg">
            <h4 class="font-bold text-sm md:text-xl text-blue-800 flex items-center mb-2 md:mb-4">
                <i data-lucide="user" class="w-4 h-4 md:w-6 md:h-6 mr-1.5 md:mr-3 text-blue-600 flex-shrink-0"></i>
                <span class="text-xs md:text-base">Personalized Traits Recommendations</span>
            </h4>
            <div class="bg-white/70 rounded-md md:rounded-xl border border-blue-300 overflow-hidden">
                ${traitsTableHTML}
                </div>
            </div>

        <!-- Wellness Recommendations -->
        <div class="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border-2 border-green-200 rounded-lg md:rounded-2xl p-2 md:p-6 shadow-lg">
            <h4 class="font-bold text-sm md:text-xl text-green-800 flex items-center mb-2 md:mb-4">
                <i data-lucide="heart" class="w-4 h-4 md:w-6 md:h-6 mr-1.5 md:mr-3 text-green-600 flex-shrink-0"></i>
                <span class="text-xs md:text-base">Personalized Wellness Recommendations</span>
            </h4>
            <div class="bg-white/70 rounded-md md:rounded-xl border border-green-300 overflow-hidden">
                ${wellnessTableHTML}
                </div>
        </div>

        <!-- Download PDF Button -->
        <div class="text-center mt-4 md:mt-6">
            <button onclick="downloadRecommendationsPDF()" class="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 md:px-8 py-2 md:py-4 rounded-lg md:rounded-xl flex items-center space-x-2 md:space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mx-auto text-xs md:text-base font-semibold">
                <i data-lucide="download" class="w-4 h-4 md:w-6 md:h-6"></i>
                                            <span>Download Personalized Recommendations PDF</span>
            </button>
            </div>
        `;
        
        // Re-render Lucide icons
        lucide.createIcons();
    }

// Show sample recommendations when API key is invalid
function showSampleRecommendations() {
    const resultsArea = document.getElementById('ai-recommendations-results');
    
    // Get ALL the user's actual test results in the same order as the data files
    const wellnessResults = [];
    const traitsResults = [];
    
    // First, collect traits in the same order as traitsData
    if (typeof traitsData !== 'undefined') {
        traitsData.forEach(trait => {
            if (window.patientResultsMap && window.patientResultsMap.has(trait.name)) {
                const value = window.patientResultsMap.get(trait.name);
                traitsResults.push({ name: trait.name, result: value.result });
            }
        });
    }
    
    // Then, collect wellness in the same order as wellnessData
    if (typeof wellnessData !== 'undefined') {
        wellnessData.forEach(wellness => {
            if (window.patientResultsMap && window.patientResultsMap.has(wellness.name)) {
                const value = window.patientResultsMap.get(wellness.name);
                wellnessResults.push({ name: wellness.name, result: value.result });
            }
        });
    }
    
    // Generate sample recommendations for ALL parameters
    const sampleTraits = traitsResults.map(item => ({
        name: item.name,
        result: item.result,
        recommendation: generateSampleRecommendation(item.name, item.result, 'trait')
    }));
    
    const sampleWellness = wellnessResults.map(item => ({
        name: item.name,
        result: item.result,
        recommendation: generateSampleRecommendation(item.name, item.result, 'wellness')
    }));
    
    // Store sample data
    window.systemRecommendations = {
        traits: sampleTraits,
        wellness: sampleWellness
    };
    
    // Render the tables
    renderRecommendationTables();
}

// Generate sample recommendations based on parameter name and result
function generateSampleRecommendation(parameterName, result, category) {
    const lowerName = parameterName.toLowerCase();
    const lowerResult = result.toLowerCase();
    
    // Trait recommendations
    if (category === 'trait') {
        if (lowerName.includes('caffeine')) {
            return lowerResult.includes('fast') ? 
                "You metabolize caffeine quickly. You can safely consume moderate amounts of caffeine throughout the day." :
                "You metabolize caffeine slowly. Limit caffeine intake and avoid it after 2 PM to prevent sleep disruption.";
        }
        if (lowerName.includes('lactose')) {
            return lowerResult.includes('low') ? 
                "You have low risk of lactose intolerance. You can likely tolerate dairy products well." :
                "You may have lactose intolerance. Consider lactose-free alternatives or lactase supplements.";
        }
        if (lowerName.includes('alcohol')) {
            return "Practice moderation with alcohol consumption. Stay hydrated and avoid excessive drinking.";
        }
        if (lowerName.includes('gluten')) {
            return lowerResult.includes('low') ? 
                "You have low risk of gluten sensitivity. You can include gluten-containing foods in your diet." :
                "You may have gluten sensitivity. Consider reducing gluten intake and monitoring symptoms.";
        }
        if (lowerName.includes('height') || lowerName.includes('growth')) {
            return "Maintain a balanced diet rich in protein, calcium, and vitamin D to support optimal growth and bone health.";
        }
        if (lowerName.includes('hair') || lowerName.includes('baldness')) {
            return "Maintain a healthy diet rich in biotin, iron, and protein. Consider gentle hair care practices.";
        }
        if (lowerName.includes('acne')) {
            return "Maintain a consistent skincare routine. Consider reducing dairy and high-glycemic foods if acne persists.";
        }
        if (lowerName.includes('eye') || lowerName.includes('vision')) {
            return "Protect your eyes from UV damage with sunglasses. Include foods rich in lutein and zeaxanthin.";
        }
        if (lowerName.includes('cognitive') || lowerName.includes('mental')) {
            return "Engage in regular mental exercises, maintain social connections, and eat brain-healthy foods like omega-3s.";
        }
        if (lowerName.includes('metabolizer') || lowerName.includes('gene')) {
            return "Your genetic profile affects how you process certain substances. Work with healthcare providers to optimize your health.";
        }
        if (lowerName.includes('endurance') || lowerName.includes('athletic')) {
            return "Focus on endurance training and proper nutrition to optimize your athletic performance.";
        }
        if (lowerName.includes('bitter') || lowerName.includes('taste')) {
            return "Your taste preferences may affect food choices. Focus on a varied diet to ensure adequate nutrition.";
        }
        // Default trait recommendation
        return `Based on your ${result} result for ${parameterName}, consider lifestyle modifications that support optimal health outcomes.`;
    }
    
    // Wellness recommendations
    if (category === 'wellness') {
        if (lowerName.includes('diabetes')) {
            return lowerResult.includes('low') ? 
                "Maintain a healthy weight and balanced diet to keep your diabetes risk low." :
                "Focus on weight management, regular exercise, and a diet low in refined sugars to reduce diabetes risk.";
        }
        if (lowerName.includes('heart') || lowerName.includes('cardiac') || lowerName.includes('coronary')) {
            return "Adopt a heart-healthy lifestyle with regular cardio exercise, omega-3 rich foods, and stress management.";
        }
        if (lowerName.includes('cancer')) {
            return "Maintain a healthy lifestyle with regular exercise, a diet rich in antioxidants, and avoid smoking and excessive alcohol.";
        }
        if (lowerName.includes('osteoporosis') || lowerName.includes('bone')) {
            return "Ensure adequate calcium and vitamin D intake, engage in weight-bearing exercises, and avoid smoking.";
        }
        if (lowerName.includes('depression') || lowerName.includes('mental')) {
            return "Maintain social connections, regular exercise, adequate sleep, and consider professional support if needed.";
        }
        if (lowerName.includes('arthritis') || lowerName.includes('joint')) {
            return "Maintain a healthy weight, engage in low-impact exercise, and consider anti-inflammatory foods.";
        }
        if (lowerName.includes('stroke')) {
            return "Control blood pressure, maintain a healthy diet, exercise regularly, and avoid smoking.";
        }
        if (lowerName.includes('liver')) {
            return "Limit alcohol consumption, maintain a healthy weight, and avoid excessive medication use.";
        }
        if (lowerName.includes('lung') || lowerName.includes('pulmonary')) {
            return "Avoid smoking and secondhand smoke, maintain good air quality, and engage in regular cardio exercise.";
        }
        if (lowerName.includes('kidney') || lowerName.includes('renal')) {
            return "Stay hydrated, maintain healthy blood pressure, and limit sodium intake.";
        }
        if (lowerName.includes('thyroid')) {
            return "Ensure adequate iodine intake, maintain a balanced diet, and monitor thyroid function regularly.";
        }
        if (lowerName.includes('autoimmune')) {
            return "Maintain a balanced diet, manage stress, get adequate sleep, and work with healthcare providers for monitoring.";
        }
        if (lowerName.includes('neurological') || lowerName.includes('parkinson') || lowerName.includes('alzheimer')) {
            return "Engage in regular mental and physical exercise, maintain social connections, and eat brain-healthy foods.";
        }
        if (lowerName.includes('digestive') || lowerName.includes('gut') || lowerName.includes('intestinal')) {
            return "Eat a fiber-rich diet, stay hydrated, manage stress, and consider probiotics for gut health.";
        }
        if (lowerName.includes('skin') || lowerName.includes('dermatitis') || lowerName.includes('psoriasis')) {
            return "Maintain gentle skincare, avoid harsh chemicals, manage stress, and consider anti-inflammatory foods.";
        }
        if (lowerName.includes('blood') || lowerName.includes('anemia') || lowerName.includes('clot')) {
            return "Maintain a balanced diet rich in iron and B vitamins, stay hydrated, and avoid prolonged sitting.";
        }
        if (lowerName.includes('metabolic') || lowerName.includes('obesity') || lowerName.includes('weight')) {
            return "Focus on portion control, regular exercise, and a balanced diet to maintain healthy metabolism.";
        }
        if (lowerName.includes('immune') || lowerName.includes('infection')) {
            return "Maintain good hygiene, eat a varied diet rich in vitamins, get adequate sleep, and manage stress.";
        }
        if (lowerName.includes('sleep') || lowerName.includes('insomnia')) {
            return "Maintain a regular sleep schedule, create a comfortable sleep environment, and avoid caffeine before bedtime.";
        }
        if (lowerName.includes('allergy') || lowerName.includes('asthma')) {
            return "Identify and avoid triggers, maintain good air quality, and work with healthcare providers for management.";
        }
        // Default wellness recommendation
        return `Based on your ${result} risk for ${parameterName}, focus on preventive measures and regular health monitoring.`;
    }
    
    // Fallback recommendation
    return `Consider lifestyle modifications and regular health monitoring for ${parameterName}.`;
}

// Download PDF function
async function downloadRecommendationsPDF() {
    try {
        // Load jsPDF dynamically
        if (!window.jspdf) {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
            script.onload = () => {
                loadAutoTable();
            };
            document.head.appendChild(script);
        } else {
            loadAutoTable();
        }
        } catch (error) {
        alert('Error loading PDF library. Please try again.');
    }
}

function loadAutoTable() {
    if (!window.jspdfAutoTable) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.31/jspdf.plugin.autotable.min.js';
        script.onload = () => {
            generatePDF();
        };
        document.head.appendChild(script);
                } else {
        generatePDF();
    }
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const { traits, wellness } = window.systemRecommendations;
    
    if (traits.length === 0 && wellness.length === 0) {
        alert('No recommendation data is available to generate a PDF.');
            return;
        }

    // Header
    doc.setFillColor(34, 139, 34);
    doc.rect(0, 0, 210, 25, 'F');
    doc.setFontSize(20);
    doc.setTextColor(255, 255, 255);
    doc.text('Codex Personalized Recommendations', 105, 17, { align: 'center' });

    let yPosition = 40;

            // General Recommendations Section
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text('General Lifestyle Recommendations', 20, yPosition);
        yPosition += 10;

        // Recommended Foods
        doc.setFontSize(12);
        doc.setTextColor(34, 197, 94); // Green color
        doc.text('Recommended Foods:', 20, yPosition);
        yPosition += 6;
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text('• Gluten-Free Alternatives: Quinoa, brown rice, corn, buckwheat', 25, yPosition);
        yPosition += 5;
        doc.text('• Omega-3 Rich Foods: Fatty fish (salmon, mackerel), walnuts, flaxseeds', 25, yPosition);
        yPosition += 5;
        doc.text('• Antioxidants: Berries, leafy greens, colorful vegetables', 25, yPosition);
        yPosition += 5;
        doc.text('• Lean Proteins: Fish, chicken breast, legumes, tofu', 25, yPosition);
        yPosition += 5;
        doc.text('• Healthy Fats: Avocados, nuts, olive oil, coconut oil', 25, yPosition);
        yPosition += 5;
        doc.text('• Fiber-Rich: Whole grains, fruits, vegetables, beans', 25, yPosition);
        yPosition += 5;
        doc.text('• Hydration: 8-10 glasses of water daily, herbal teas', 25, yPosition);
        yPosition += 8;

        // Foods to Limit
        doc.setFontSize(12);
        doc.setTextColor(239, 68, 68); // Red color
        doc.text('Foods to Limit:', 20, yPosition);
        yPosition += 6;
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text('• Gluten Containing Foods: Wheat, barley, rye products', 25, yPosition);
        yPosition += 5;
        doc.text('• Processed Sugars: Sodas, candies, pastries, desserts', 25, yPosition);
        yPosition += 5;
        doc.text('• High Sodium Foods: Processed meals, canned foods, fast food', 25, yPosition);
        yPosition += 5;
        doc.text('• Trans Fats: Fried foods, margarine, processed snacks', 25, yPosition);
        yPosition += 5;
        doc.text('• Artificial Additives: Preservatives, artificial colors, flavors', 25, yPosition);
        yPosition += 5;
        doc.text('• Excessive Caffeine: Limit to 2-3 cups of coffee daily', 25, yPosition);
        yPosition += 5;
        doc.text('• Alcohol: Moderate consumption, avoid excessive intake', 25, yPosition);
        yPosition += 8;

        // Sports & Exercise
        doc.setFontSize(12);
        doc.setTextColor(59, 130, 246); // Blue color
        doc.text('Sports & Exercise:', 20, yPosition);
        yPosition += 6;
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text('• Cardiovascular: 150 minutes moderate or 75 minutes vigorous weekly', 25, yPosition);
        yPosition += 5;
        doc.text('• Activities: Walking, swimming, cycling, dancing, jogging', 25, yPosition);
        yPosition += 5;
        doc.text('• Strength Training: 2-3 times per week, all major muscle groups', 25, yPosition);
        yPosition += 5;
        doc.text('• Flexibility: Daily stretching or yoga sessions', 25, yPosition);
        yPosition += 5;
        doc.text('• Recovery: 7-9 hours quality sleep, rest days between intense workouts', 25, yPosition);
        yPosition += 8;

        // Daily Routine
        doc.setFontSize(12);
        doc.setTextColor(147, 51, 234); // Purple color
        doc.text('Daily Routine Recommendations:', 20, yPosition);
        yPosition += 6;
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text('• Morning (7-9 AM): Start with water and protein-rich breakfast', 25, yPosition);
        yPosition += 5;
        doc.text('• Afternoon (12-2 PM): Balanced lunch with vegetables and lean protein', 25, yPosition);
        yPosition += 5;
        doc.text('• Evening (5-7 PM): 30-45 minutes of moderate exercise', 25, yPosition);
        yPosition += 15;

    // Traits Section
    if (traits.length > 0) {
        doc.setFontSize(16);
        doc.setTextColor(59, 130, 246);
        doc.text('Personalized Traits Recommendations', 20, yPosition);
        yPosition += 10;

                    doc.autoTable({
                startY: yPosition,
                head: [['Trait Parameter', 'Your Result', 'Recommendation']],
            body: traits.map(item => [item.name, item.result, item.recommendation]),
            didDrawPage: (data) => { data.settings.margin.top = 30; },
            margin: { top: 30 },
            theme: 'grid',
            headStyles: { fillColor: [59, 130, 246], textColor: 255 },
            alternateRowStyles: { fillColor: [239, 246, 255] },
            didParseCell: (data) => { 
                if (data.section === 'head') data.cell.styles.fontStyle = 'bold';
                if (data.section === 'body') data.cell.styles.fontSize = 9;
            }
        });
        yPosition = doc.autoTable.previous.finalY + 15;
    }

    // Wellness Section
    if (wellness.length > 0) {
        doc.setFontSize(16);
        doc.setTextColor(34, 197, 94);
        doc.text('Personalized Wellness Recommendations', 20, yPosition);
        yPosition += 10;

                    doc.autoTable({
                startY: yPosition,
                head: [['Wellness Parameter', 'Your Result', 'Recommendation']],
            body: wellness.map(item => [item.name, item.result, item.recommendation]),
            didDrawPage: (data) => { data.settings.margin.top = 30; },
            margin: { top: 30 },
            theme: 'grid',
            headStyles: { fillColor: [34, 197, 94], textColor: 255 },
            alternateRowStyles: { fillColor: [240, 253, 244] },
            didParseCell: (data) => { 
                if (data.section === 'head') data.cell.styles.fontStyle = 'bold';
                if (data.section === 'body') data.cell.styles.fontSize = 9;
            }
        });
    }

    // Footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8).setTextColor(150).text(`Page ${i} of ${pageCount}`, 105, 285, { align: 'center' });
    }

    const dateStr = new Date().toISOString().split('T')[0];
    doc.save(`Codex_Personalized_Recommendations_${dateStr}.pdf`);
}