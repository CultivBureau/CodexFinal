console.log('=== main_user_page.js LOADED ===');

document.addEventListener('DOMContentLoaded', () => {
    console.log('=== DOMContentLoaded FIRED ===');

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
                console.log('Complex diseases tab selected, updating risk indicators...');
                setTimeout(() => {
                    console.log('Delayed update of complex risk indicators...');
                    updateComplexRiskIndicators();
                }, 500);
            }

            // Auto-generate recommendations when comprehensive tab is selected
            if (tab.dataset.tab === 'comprehensive') {
                console.log('Comprehensive tab selected, auto-generating recommendations...');
                setTimeout(() => {
                    const comprehensivePanel = document.getElementById('comprehensive-recommendations');
                    if (comprehensivePanel && comprehensivePanel.querySelector('.animate-spin')) {
                        generateComprehensiveLifestyleRecommendations();
                    }
                }, 500);
            }
        });
    });

    // Handle window resize for mobile/desktop switching
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const isMobile = window.innerWidth <= 768;
            console.log(`Window resized to ${window.innerWidth}px, Mobile: ${isMobile}`);

            // Refresh parameter lists if needed when switching between mobile/desktop
            if (isMobile !== window.wasMobile) {
                window.wasMobile = isMobile;
                console.log('Mobile/Desktop mode changed, refreshing parameter lists...');

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
                    console.log(`Refreshing ${tabName} parameter list...`);

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
                
                <!-- Recommendations Section - Only for Wellness and Traits -->
                ${(containerId.includes('wellness') || containerId.includes('traits')) ? `
                <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 class="font-semibold text-blue-800 flex items-center mb-2">
                        <i data-lucide="lightbulb" class="w-4 h-4 mr-2"></i>
                        Personalized Recommendations
                    </h4>
                    <div class="text-blue-700 text-sm">
                        <div id="recommendation-${item.name.replace(/\s+/g, '-').toLowerCase()}" class="recommendation-content">
                            <div class="loading-recommendation">
                                <i data-lucide="loader-2" class="w-4 h-4 animate-spin mr-2"></i>
                                Generating personalized recommendations...
                            </div>
                        </div>
                    </div>
                </div>
                ` : ''}
                
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

        console.log(`Creating parameter list for ${listContainerId} with ${items.length} items`);

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

                            // Generate recommendations if needed (for wellness and traits)
                            if (detailsContainerId.includes('wellness') || detailsContainerId.includes('traits')) {
                                setTimeout(() => {
                                    generateRecommendations(originalItem.name, resultValue, detailsContainerId);
                                }, 100);
                            }

                            // Initialize Lucide icons for the mobile content
                            setTimeout(() => {
                                lucide.createIcons();
                            }, 50);


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
                    console.log(`Added risk indicator for complex disease: ${item.name}`);
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
                            console.log(`Found patient result for "${parameterName}":`, patientResult);
                        }
                    }

                    displayDetails(detailsContainerId, originalItem, resultValue, action);
                    listContainer.querySelectorAll('.parameter-item').forEach(el => el.classList.remove('selected'));
                    itemDiv.classList.add('selected');

                    // Generate recommendations after displaying details (only for wellness and traits)
                    if (detailsContainerId.includes('wellness') || detailsContainerId.includes('traits')) {
                        setTimeout(() => {
                            generateRecommendations(originalItem.name, resultValue, detailsContainerId);
                        }, 100);
                    }
                });

                if (index === 0 && !isMobile) {
                    itemDiv.classList.add('selected');
                    displayDetails(detailsContainerId, item, 'N/A', null);

                    // Generate recommendations for the first item (only for wellness and traits)
                    if (detailsContainerId.includes('wellness') || detailsContainerId.includes('traits')) {
                        setTimeout(() => {
                            generateRecommendations(item.name, 'N/A', detailsContainerId);
                        }, 100);
                    }
                }
            }

            listContainer.appendChild(itemDiv);
        });

        console.log(`Finished creating parameter list for ${listContainerId}`);

        // Update risk indicators for complex diseases if we have patient results
        if (listContainerId === 'complex-list') {
            console.log('Complex list created, checking for patient results...');
            if (window.patientResultsMap) {
                console.log('Patient results map found, updating risk indicators...');
                updateComplexRiskIndicators();
            } else {
                console.log('No patient results map found yet');
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

        // Recommendations Section - SECOND MOST PROMINENT (for Wellness and Traits)
        if (detailsContainerId.includes('wellness') || detailsContainerId.includes('traits')) {
            contentHTML += `
                <div class="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-3 mb-3 shadow-sm">
                    <h4 class="font-bold text-purple-800 flex items-center mb-2 text-sm">
                        <i data-lucide="lightbulb" class="w-4 h-4 mr-2 text-purple-600"></i>
                        Recommendations
                    </h4>
                    <div class="text-purple-700 text-xs">
                        <div id="mobile-recommendation-${item.name.replace(/\s+/g, '-').toLowerCase()}" class="mobile-recommendation-content">
                            <div class="loading-recommendation flex items-center justify-center py-2">
                                <i data-lucide="loader-2" class="w-4 h-4 animate-spin mr-2"></i>
                                <span class="text-sm font-medium">Generating recommendations...</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

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
                            <button class="text-blue-600 font-semibold ml-2 underline hover:text-blue-800 transition-colors" 
                                    onclick="toggleMobileDefinition(this, '${item.name.replace(/\s+/g, '-').toLowerCase()}')">
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
                            <button class="text-blue-600 font-semibold ml-2 underline hover:text-blue-800 transition-colors" 
                                    onclick="toggleMobileGenes(this, '${item.name.replace(/\s+/g, '-').toLowerCase()}')">
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
                                    <button class="text-blue-600 font-semibold ml-2 underline hover:text-blue-800 transition-colors text-xs" 
                                            onclick="toggleMobileGenes(this, '${item.name.replace(/\s+/g, '-').toLowerCase()}')">
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

    // Function to update risk indicators with proper colors
    function updateComplexRiskIndicators() {
        const complexList = document.getElementById('complex-list');
        if (!complexList) {
            console.error('Complex list container not found!');
            return;
        }

        console.log('=== UPDATING COMPLEX RISK INDICATORS ===');
        console.log('Patient results map exists:', !!window.patientResultsMap);

        if (window.patientResultsMap) {
            console.log('Patient results map size:', window.patientResultsMap.size);
            console.log('All patient results:');
            for (let [key, value] of window.patientResultsMap.entries()) {
                console.log(`  "${key}":`, value);
            }
        }

        const parameterItems = complexList.querySelectorAll('.parameter-item');
        console.log(`Found ${parameterItems.length} parameter items in complex list`);

        if (parameterItems.length === 0) {
            console.error('No parameter items found in complex list!');
            return;
        }

        parameterItems.forEach((item, index) => {
            const riskIndicator = item.querySelector('[data-risk-indicator]');
            if (!riskIndicator) {
                console.error(`No risk indicator found for item ${index}:`, item);
                return;
            }

            // Get parameter name from the dataset or text content
            let parameterName = item.dataset.originalName || item.textContent.replace(/●/, '').trim();
            console.log(`Processing parameter ${index + 1}: "${parameterName}"`);

            // Check if we have patient results
            if (window.patientResultsMap && window.patientResultsMap.size > 0) {
                // Try to find the result by exact name match first
                let patientResult = window.patientResultsMap.get(parameterName);

                // If not found, try to find by partial match
                if (!patientResult) {
                    for (let [key, value] of window.patientResultsMap.entries()) {
                        if (key.includes(parameterName) || parameterName.includes(key)) {
                            patientResult = value;
                            console.log(`Found partial match: "${key}" for "${parameterName}"`);
                            break;
                        }
                    }
                }

                console.log(`Patient result for "${parameterName}":`, patientResult);

                if (patientResult && patientResult.result) {
                    const riskLevel = getRiskLevelFromResult(patientResult.result);
                    const riskColor = getRiskColorForIndicator(riskLevel);
                    console.log(`Risk level: ${riskLevel}, Color: ${riskColor}`);

                    // Update the risk indicator with proper color
                    riskIndicator.className = `inline-block w-4 h-4 rounded-full mr-2 ${riskColor}`;
                    console.log(`✓ Updated risk indicator color to: ${riskColor}`);
                } else {
                    // Default to gray if no result
                    riskIndicator.className = 'inline-block w-4 h-4 rounded-full mr-2 bg-gray-400';
                    console.log(`No result found, using default gray`);
                }
            } else {
                // Default to gray if no patient results map
                riskIndicator.className = 'inline-block w-4 h-4 rounded-full mr-2 bg-gray-400';
                console.log(`No patient results map, using default gray`);
            }
        });

        console.log('=== FINISHED UPDATING COMPLEX RISK INDICATORS ===');
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
        console.log('Populating parameter lists...');

        // Check if data files are loaded
        console.log('wellnessData available:', typeof wellnessData !== 'undefined');
        console.log('traitsData available:', typeof traitsData !== 'undefined');
        console.log('monogenicData available:', typeof monogenicData !== 'undefined');
        console.log('complexData available:', typeof complexData !== 'undefined');
        console.log('pharmaData available:', typeof pharmaData !== 'undefined');

        // Populate Wellness list
        if (typeof wellnessData !== 'undefined') {
            createParameterList('wellness-list', 'wellness-details', wellnessData);
            console.log('Wellness list populated with', wellnessData.length, 'items');
        } else {
            console.error('wellnessData is not defined!');
        }

        // Populate Traits list
        if (typeof traitsData !== 'undefined') {
            createParameterList('traits-list', 'traits-details', traitsData);
            console.log('Traits list populated with', traitsData.length, 'items');
        } else {
            console.error('traitsData is not defined!');
        }

        // Populate Monogenic list
        if (typeof monogenicData !== 'undefined') {
            createParameterList('monogenic-list', 'monogenic-details', monogenicData);
            console.log('Monogenic list populated with', monogenicData.length, 'items');
        } else {
            console.error('monogenicData is not defined!');
        }

        // Populate Complex list
        if (typeof complexData !== 'undefined') {
            createParameterList('complex-list', 'complex-details', complexData);
            console.log('Complex list populated with', complexData.length, 'items');
        } else {
            console.error('complexData is not defined!');
        }

        // Populate Pharma list
        if (typeof pharmaData !== 'undefined') {
            createParameterList('pharma-list', 'pharma-details', pharmaData);
            console.log('Pharma list populated with', pharmaData.length, 'items');
        } else {
            console.error('pharmaData is not defined!');
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
    window.debugPatientResults = function () {
        console.log('=== DEBUGGING PATIENT RESULTS ===');
        console.log('Patient results map exists:', !!window.patientResultsMap);
        if (window.patientResultsMap) {
            console.log('Patient results map size:', window.patientResultsMap.size);
            console.log('All patient results:');
            for (let [key, value] of window.patientResultsMap.entries()) {
                console.log(`  "${key}":`, value);
            }
        }
        console.log('Complex list element:', document.getElementById('complex-list'));
        console.log('Complex parameter items:', document.querySelectorAll('#complex-list .parameter-item').length);
        console.log('Complex risk indicators:', document.querySelectorAll('#complex-list [data-risk-indicator]').length);
        console.log('================================');
    };

    // Add a function to manually test risk indicators
    window.testRiskIndicators = function () {
        console.log('=== TESTING RISK INDICATORS ===');

        // Check if complex list exists
        const complexList = document.getElementById('complex-list');
        if (!complexList) {
            console.error('Complex list not found!');
            return;
        }

        // Check parameter items
        const parameterItems = complexList.querySelectorAll('.parameter-item');
        console.log(`Found ${parameterItems.length} parameter items`);

        // Check risk indicators
        const riskIndicators = complexList.querySelectorAll('[data-risk-indicator]');
        console.log(`Found ${riskIndicators.length} risk indicators`);

        // Show first few items
        parameterItems.forEach((item, index) => {
            if (index < 5) {
                const riskIndicator = item.querySelector('[data-risk-indicator]');
                const name = item.dataset.originalName || item.textContent;
                console.log(`Item ${index + 1}: "${name}" - Risk indicator: ${riskIndicator ? 'Present' : 'Missing'}`);
            }
        });

        console.log('=== END TEST ===');
    };

    // Add a function to force update risk indicators
    window.forceUpdateRiskIndicators = function () {
        console.log('=== FORCE UPDATING RISK INDICATORS ===');
        updateComplexRiskIndicators();
        console.log('=== FORCE UPDATE COMPLETE ===');
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

// Function to generate and display recommendations
async function generateRecommendations(parameterName, resultValue, containerId) {
    const recommendationDiv = document.getElementById(`recommendation-${parameterName.replace(/\s+/g, '-').toLowerCase()}`);
    if (!recommendationDiv) return;

    try {
        let recommendation = '';

        // Only show recommendations for wellness and traits
        if (containerId.includes('wellness')) {
            // Use fallback wellness recommendations
            recommendation = window.wellnessRecommendations[parameterName] ||
                "Focus on maintaining a balanced diet and regular exercise routine based on your genetic profile.";
        } else if (containerId.includes('traits')) {
            // Use fallback traits recommendations
            recommendation = window.traitsRecommendations[parameterName] ||
                "Use your genetic insights to make informed lifestyle choices that align with your personal characteristics.";
        } else {
            // Hide recommendations for other test types
            recommendationDiv.style.display = 'none';
            return;
        }

        // Display the recommendation
        recommendationDiv.innerHTML = `
                <div class="recommendation-text">
                    <p class="mb-2">${recommendation}</p>
                </div>
            `;

        lucide.createIcons();

    } catch (error) {
        console.error('Error generating recommendation:', error);
        recommendationDiv.innerHTML = `
                <div class="text-red-600">
                    <p>Unable to generate recommendation. Please try again later.</p>
                </div>
            `;
    }
}

// Function to regenerate recommendation using AI
async function regenerateRecommendation(parameterName, resultValue, containerId) {
    const recommendationDiv = document.getElementById(`recommendation-${parameterName.replace(/\s+/g, '-').toLowerCase()}`);
    if (!recommendationDiv) return;

    // Show loading state
    recommendationDiv.innerHTML = `
            <div class="loading-recommendation">
                <i data-lucide="loader-2" class="w-4 h-4 animate-spin mr-2"></i>
                Generating AI-powered recommendation...
            </div>
        `;
    lucide.createIcons();

    try {
        if (window.RecommendationEngine) {
            const engine = new window.RecommendationEngine();
            let recommendation = '';

            if (containerId.includes('wellness')) {
                recommendation = await engine.generateWellnessRecommendations(parameterName, resultValue);
            } else if (containerId.includes('traits')) {
                recommendation = await engine.generateTraitsRecommendations(parameterName, resultValue);
            } else {
                recommendation = await engine.generateRecommendation(
                    `Generate a brief, actionable recommendation for ${parameterName} with result ${resultValue}`
                );
            }

            // Display the AI-generated recommendation
            recommendationDiv.innerHTML = `
                    <div class="recommendation-text">
                        <p class="mb-2">${recommendation}</p>
                    </div>
                `;
        } else {
            throw new Error('Recommendation engine not available');
        }
    } catch (error) {
        console.error('Error regenerating recommendation:', error);
        recommendationDiv.innerHTML = `
                <div class="text-red-600">
                    <p>Unable to generate AI recommendation. Using fallback recommendation.</p>
                </div>
            `;
    }

    lucide.createIcons();
}

// Function to generate comprehensive lifestyle recommendations
async function generateComprehensiveLifestyleRecommendations() {
    const comprehensivePanel = document.getElementById('comprehensive-recommendations');
    if (!comprehensivePanel) return;

    // Show loading state
    comprehensivePanel.innerHTML = `
            <div class="text-center py-8">
                <i data-lucide="loader-2" class="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600"></i>
                <p class="text-gray-600">Generating comprehensive lifestyle recommendations...</p>
            </div>
        `;
    lucide.createIcons();

    try {
        if (window.RecommendationEngine) {
            const engine = new window.RecommendationEngine();

            // Determine which test types have been taken
            const testTypes = [];
            if (document.getElementById('wellness-list').children.length > 0) testTypes.push('Wellness');
            if (document.getElementById('traits-list').children.length > 0) testTypes.push('Traits');
            if (document.getElementById('complex-list').children.length > 0) testTypes.push('GENETIC SUSCEPTIBILITY TO HEALTH DISORDERS');
            if (document.getElementById('monogenic-list').children.length > 0) testTypes.push('FAMILIAL GENETIC CONDITIONS');
            if (document.getElementById('pharma-list').children.length > 0) testTypes.push('Pharmacogenomics');

            // Collect actual user results for analysis
            const userResults = {};

            // Collect wellness data
            if (typeof wellnessData !== 'undefined' && wellnessData.length > 0) {
                userResults.wellness = wellnessData.map(item => ({
                    name: item.name,
                    result: getParameterResult(item.name) || 'Analysis needed'
                }));
            }

            // Collect traits data
            if (typeof traitsData !== 'undefined' && traitsData.length > 0) {
                userResults.traits = traitsData.map(item => ({
                    name: item.name,
                    result: getParameterResult(item.name) || 'Analysis needed'
                }));
            }

            // Collect complex disease data
            if (typeof complexData !== 'undefined' && complexData.length > 0) {
                userResults.complex = complexData.map(item => ({
                    name: item.name,
                    result: getParameterResult(item.name) || 'Analysis needed'
                }));
            }

            // Collect monogenic data
            if (typeof monogenicData !== 'undefined' && monogenicData.length > 0) {
                userResults.monogenic = monogenicData.map(item => ({
                    name: item.name,
                    result: getParameterResult(item.name) || 'Analysis needed'
                }));
            }

            // Collect pharma data
            if (typeof pharmaData !== 'undefined' && pharmaData.length > 0) {
                userResults.pharma = pharmaData.map(item => ({
                    name: item.name,
                    result: getParameterResult(item.name) || 'Analysis needed'
                }));
            }

            // Analyze user results and generate personalized recommendations
            const personalizedRecommendations = await analyzeUserResultsAndGenerateRecommendations(testTypes, userResults);

            // Populate personalized food recommendations
            setTimeout(() => populatePersonalizedFoodRecommendations(userResults), 100);

            // Populate personalized daily routine
            setTimeout(() => populatePersonalizedRoutine(userResults), 100);

            // Display the recommendations
            comprehensivePanel.innerHTML = `
                    <div class="space-y-8">
                        <!-- Header Section -->
                        <div class="text-center mb-6">
                            <div class="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-3 sm:mb-4">
                                <i data-lucide="heart" class="w-8 h-8 sm:w-10 sm:h-10 text-white"></i>
                            </div>
                        </div>
                        
                        <!-- General Lifestyle Recommendations (for all users) -->
                        <div class="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border-2 border-green-200 rounded-2xl p-4 sm:p-8 shadow-lg mb-8">
                            <h4 class="font-bold text-2xl sm:text-3xl text-green-800 flex items-center mb-6 sm:mb-8">
                                <i data-lucide="heart" class="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 text-green-600"></i>
                                General Lifestyle Recommendations
                            </h4>
                            <div class="space-y-6">
                                <div class="bg-white bg-opacity-70 rounded-xl p-4 sm:p-6 border border-green-300">
                                    <h5 class="font-bold text-lg sm:text-xl text-green-900 mb-3 sm:mb-4 flex items-center">
                                        <i data-lucide="leaf" class="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-700"></i>
                                        Universal Health & Wellness Guidelines
                                    </h5>
                                    <div class="text-green-800 text-base sm:text-lg leading-relaxed space-y-3 sm:space-y-4">
                                        <div class="flex items-start space-x-4">
                                            <div class="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <p class="leading-relaxed"><strong>Nutrition Foundation:</strong> Consume a balanced diet rich in colorful fruits and vegetables (aim for 7-9 servings daily), lean proteins, whole grains, and healthy fats. Stay hydrated with 8-10 glasses of water daily.</p>
                                        </div>
                                        <div class="flex items-start space-x-4">
                                            <div class="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <p class="leading-relaxed"><strong>Physical Activity:</strong> Engage in at least 150 minutes of moderate-intensity exercise weekly, including cardio, strength training, and flexibility exercises. Find activities you enjoy to maintain consistency.</p>
                                        </div>
                                        <div class="flex items-start space-x-4">
                                            <div class="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <p class="leading-relaxed"><strong>Sleep Hygiene:</strong> Maintain 7-9 hours of quality sleep nightly. Establish a consistent sleep schedule, create a relaxing bedtime routine, and optimize your sleep environment.</p>
                                        </div>
                                        <div class="flex items-start space-x-4">
                                            <div class="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <p class="leading-relaxed"><strong>Stress Management:</strong> Practice daily stress-reduction techniques such as meditation, deep breathing, yoga, or mindfulness. Prioritize work-life balance and seek support when needed.</p>
                                        </div>
                                        <div class="flex items-start space-x-4">
                                            <div class="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <p class="leading-relaxed"><strong>Preventive Care:</strong> Schedule regular health checkups, maintain recommended vaccinations, and stay up-to-date with age-appropriate screenings. Prevention is key to long-term health.</p>
                                        </div>
                                        <div class="flex items-start space-x-4">
                                            <div class="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <p class="leading-relaxed"><strong>Social Connection:</strong> Maintain strong relationships with family and friends. Social support contributes significantly to mental and physical well-being.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Personalized Insights (based on user's specific results) -->
                        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-4 sm:p-8 shadow-lg">
                            <h4 class="font-bold text-2xl sm:text-3xl text-blue-800 flex items-center mb-6 sm:mb-8">
                                <i data-lucide="brain" class="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 text-blue-600"></i>
                                Your Personalized Genetic Insights
                            </h4>
                            <div class="space-y-8">
                                <!-- Main Analysis -->
                                <div class="bg-white bg-opacity-70 rounded-xl p-4 sm:p-6 border border-blue-300">
                                    <h5 class="font-bold text-lg sm:text-xl text-blue-900 mb-3 sm:mb-4 flex items-center">
                                        <i data-lucide="search" class="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-700"></i>
                                        Comprehensive Analysis of Your Genetic Results
                                    </h5>
                                    <div class="text-blue-800 text-base sm:text-lg leading-relaxed space-y-3 sm:space-y-4">
                                        ${personalizedRecommendations.split('\n').filter(rec => rec.trim()).map(rec => `
                                            <div class="flex items-start space-x-4">
                                                <div class="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                                                <p class="leading-relaxed">${rec}</p>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                                
                                <!-- Parameter-Specific Analysis -->
                                <div class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 sm:p-6 border border-indigo-200">
                                    <h5 class="font-bold text-lg sm:text-xl text-indigo-900 mb-3 sm:mb-4 flex items-center">
                                        <i data-lucide="list" class="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-indigo-700"></i>
                                        Detailed Parameter Analysis
                                    </h5>
                                    <div class="space-y-3 sm:space-y-4">
                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                            <div class="bg-white bg-opacity-70 rounded-lg p-4">
                                                <h6 class="font-semibold text-indigo-800 mb-2 flex items-center">
                                                    <i data-lucide="dna" class="w-4 h-4 mr-2"></i>
                                                    Genetic Markers Analyzed
                                                </h6>
                                                <p class="text-sm text-indigo-700">Comprehensive analysis of ${testTypes.length} test categories with detailed parameter breakdown</p>
                                            </div>
                                            <div class="bg-white bg-opacity-70 rounded-lg p-4">
                                                <h6 class="font-semibold text-indigo-800 mb-2 flex items-center">
                                                    <i data-lucide="target" class="w-4 h-4 mr-2"></i>
                                                    Priority-Based Recommendations
                                                </h6>
                                                <p class="text-sm text-indigo-700">Ranked by health impact and urgency for your specific genetic profile</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Priority Actions -->
                                <div class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 sm:p-6 border border-amber-200">
                                    <h5 class="font-bold text-lg sm:text-xl text-amber-900 mb-3 sm:mb-4 flex items-center">
                                        <i data-lucide="alert-triangle" class="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-amber-700"></i>
                                        Priority Actions for Your Profile
                                    </h5>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                        <div class="bg-white bg-opacity-50 rounded-lg p-4">
                                            <h6 class="font-semibold text-amber-800 mb-2 flex items-center">
                                                <i data-lucide="zap" class="w-4 h-4 mr-2"></i>
                                                Immediate Focus
                                            </h6>
                                            <p class="text-sm text-amber-700">Address your highest-risk genetic markers through targeted lifestyle changes</p>
                                        </div>
                                        <div class="bg-white bg-opacity-50 rounded-lg p-4">
                                            <h6 class="font-semibold text-amber-800 mb-2 flex items-center">
                                                <i data-lucide="activity" class="w-4 h-4 mr-2"></i>
                                                Monitor Regularly
                                            </h6>
                                            <p class="text-sm text-amber-700">Track parameters that showed concerning results in your genetic analysis</p>
                                        </div>
                                        <div class="bg-white bg-opacity-50 rounded-lg p-4">
                                            <h6 class="font-semibold text-amber-800 mb-2 flex items-center">
                                                <i data-lucide="refresh-cw" class="w-4 h-4 mr-2"></i>
                                                Lifestyle Adjustments
                                            </h6>
                                            <p class="text-sm text-amber-700">Implement specific changes based on your genetic predispositions</p>
                                        </div>
                                        <div class="bg-white bg-opacity-50 rounded-lg p-4">
                                            <h6 class="font-semibold text-amber-800 mb-2 flex items-center">
                                                <i data-lucide="stethoscope" class="w-4 h-4 mr-2"></i>
                                                Professional Guidance
                                            </h6>
                                            <p class="text-sm text-amber-700">Consult healthcare providers about abnormal findings</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Key Findings Summary -->
                                <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 border border-green-200">
                                    <h5 class="font-bold text-lg sm:text-xl text-green-900 mb-3 sm:mb-4 flex items-center">
                                        <i data-lucide="clipboard-check" class="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-700"></i>
                                        Summary of Key Findings
                                    </h5>
                                    <div class="space-y-3">
                                        <div class="flex items-start space-x-3">
                                            <div class="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                            <p class="text-green-800"><strong>High Priority:</strong> Focus on abnormal results that require immediate attention</p>
                                        </div>
                                        <div class="flex items-start space-x-3">
                                            <div class="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                                            <p class="text-green-800"><strong>Medium Priority:</strong> Monitor and make gradual lifestyle adjustments</p>
                                        </div>
                                        <div class="flex items-start space-x-3">
                                            <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                            <p class="text-green-800"><strong>Favorable Results:</strong> Maintain current healthy practices</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                                                <!-- Food & Nutrition Section -->
                        <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-4 sm:p-8 shadow-lg">
                            <h4 class="font-bold text-xl sm:text-2xl text-green-800 flex items-center mb-4 sm:mb-6">
                                <i data-lucide="utensils" class="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-green-600"></i>
                                Daily Nutrition Guide
                            </h4>
                            
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                                <!-- Foods to Include -->
                                <div class="space-y-4">
                                    <h5 class="font-bold text-xl text-green-700 flex items-center">
                                        <i data-lucide="check-circle" class="w-6 h-6 mr-2 text-green-600"></i>
                                        Personalized Foods to Include
                                    </h5>
                                    <div class="space-y-3" id="personalized-foods-include">
                                        <!-- Dynamic content will be populated based on user results -->
                                    </div>
                                </div>
                                
                                <!-- Foods to Limit -->
                                <div class="space-y-4">
                                    <h5 class="font-bold text-xl text-red-700 flex items-center">
                                        <i data-lucide="x-circle" class="w-6 h-6 mr-2 text-red-600"></i>
                                        Personalized Foods to Limit
                                    </h5>
                                    <div class="space-y-3" id="personalized-foods-limit">
                                        <!-- Dynamic content will be populated based on user results -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Meal Timing & Hydration -->
                        <div class="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-4 sm:p-8 shadow-lg">
                            <h4 class="font-bold text-xl sm:text-2xl text-purple-800 flex items-center mb-4 sm:mb-6">
                                <i data-lucide="clock" class="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-purple-600"></i>
                                Daily Routine & Hydration
                            </h4>
                            
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6" id="personalized-routine">
                                <!-- Dynamic content will be populated based on user traits -->
                            </div>
                            
                            <div class="mt-8 bg-white bg-opacity-50 rounded-xl p-6">
                                <h5 class="font-bold text-xl text-purple-800 mb-4 flex items-center">
                                    <i data-lucide="droplets" class="w-6 h-6 mr-2 text-purple-600"></i>
                                    Hydration Goals
                                </h5>
                                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                                    <div>
                                        <div class="text-3xl mb-2">🌅</div>
                                        <p class="font-semibold text-purple-800">Morning</p>
                                        <p class="text-sm text-purple-600">2-3 glasses of water</p>
                                    </div>
                                    <div>
                                        <div class="text-3xl mb-2">☀️</div>
                                        <p class="font-semibold text-purple-800">Daytime</p>
                                        <p class="text-sm text-purple-600">6-8 glasses of water</p>
                                    </div>
                                    <div>
                                        <div class="text-3xl mb-2">🏃‍♂️</div>
                                        <p class="font-semibold text-purple-800">Exercise</p>
                                        <p class="text-sm text-purple-600">+2 glasses during activity</p>
                                    </div>
                                    <div>
                                        <div class="text-3xl mb-2">🌙</div>
                                        <p class="font-semibold text-purple-800">Evening</p>
                                        <p class="text-sm text-purple-600">1-2 glasses before bed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Comprehensive Parameter Breakdown -->
                        <div class="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-2xl p-4 sm:p-8 shadow-lg">
                            <h4 class="font-bold text-xl sm:text-2xl text-orange-800 flex items-center mb-4 sm:mb-6">
                                <i data-lucide="dna" class="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-orange-600"></i>
                                Comprehensive Parameter Analysis
                            </h4>
                            
                            <div class="space-y-4 sm:space-y-6">
                                <!-- Test Categories Breakdown -->
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div class="space-y-4">
                                        <h5 class="font-bold text-lg text-orange-700 flex items-center">
                                            <i data-lucide="bar-chart-3" class="w-5 h-5 mr-2"></i>
                                            Test Categories Analyzed:
                                        </h5>
                                        <ul class="space-y-2 text-orange-700">
                                            ${testTypes.map(type => `
                                                <li class="flex items-center space-x-2">
                                                    <i data-lucide="check" class="w-4 h-4 text-orange-600"></i>
                                                    <span>${type} genetic markers</span>
                                                </li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                    
                                    <div class="space-y-4">
                                        <h5 class="font-bold text-lg text-orange-700 flex items-center">
                                            <i data-lucide="target" class="w-5 h-5 mr-2"></i>
                                            Analysis Depth:
                                        </h5>
                                        <div class="space-y-3">
                                            <div class="bg-white bg-opacity-50 rounded-lg p-3">
                                                <p class="font-semibold text-orange-800">Parameter Coverage</p>
                                                <p class="text-sm text-orange-600">Comprehensive analysis of ALL major parameters</p>
                                            </div>
                                            <div class="bg-white bg-opacity-50 rounded-lg p-3">
                                                <p class="font-semibold text-orange-800">Priority Ranking</p>
                                                <p class="text-sm text-orange-600">Risk-based prioritization for your health</p>
                                            </div>
                                            <div class="bg-white bg-opacity-50 rounded-lg p-3">
                                                <p class="font-semibold text-orange-800">Action Planning</p>
                                                <p class="text-sm text-orange-600">Specific steps for each concerning result</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                            </div>
                        </div>
                        
                        <!-- Action Buttons -->
                        <div class="text-center space-y-3 sm:space-y-4">
                            <div class="flex justify-center">
                                <button onclick="saveRecommendationsAsText()" 
                                        class="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    <i data-lucide="file-text" class="w-5 h-5 sm:w-6 sm:h-6 mr-3"></i>
                                    <span class="font-semibold text-base sm:text-lg">Save Recommendations</span>
                                </button>
                            </div>
                            <p class="text-xs sm:text-sm text-gray-600 mt-2">Generates a clean, formatted text file with all your personalized recommendations</p>
                        </div>
                    </div>
                `;
        } else {
            throw new Error('Recommendation engine not available');
        }
    } catch (error) {
        console.error('Error generating comprehensive recommendations:', error);
        comprehensivePanel.innerHTML = `
                <div class="text-center py-8">
                    <div class="text-red-600 mb-4">
                        <i data-lucide="alert-circle" class="w-12 h-12 mx-auto mb-2"></i>
                        <p>Unable to generate AI recommendations</p>
                    </div>
                </div>
            `;
    }

    lucide.createIcons();
}

// Function to save recommendations as a clean, formatted PDF
async function saveRecommendationsAsPDF() {
    try {
        // Check if jsPDF is available
        if (typeof window.jspdf === 'undefined') {
            await loadJSPDF();
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Set document properties
        doc.setProperties({
            title: 'Codex Personalized Lifestyle Recommendations',
            subject: 'Genetic-Based Health and Lifestyle Recommendations',
            author: 'Codex Genetic Analysis System',
            creator: 'Codex System'
        });

        // Get patient information
        const patientNameElement = document.getElementById('patient-name');
        const patientIdElement = document.getElementById('patient-id');
        const patientName = patientNameElement ? patientNameElement.textContent.trim() : 'Patient Name';
        const patientId = patientIdElement ? patientIdElement.textContent.trim() : 'Patient ID';

        // Professional header
        doc.setFillColor(34, 139, 34);
        doc.rect(0, 0, 210, 40, 'F');

        doc.setFontSize(24);
        doc.setTextColor(255, 255, 255);
        doc.text('Codex Personalized Recommendations', 105, 20, { align: 'center' });

        doc.setFontSize(12);
        doc.text('Genetic-Based Lifestyle & Health Guide', 105, 30, { align: 'center' });

        // Patient information box
        doc.setFillColor(248, 250, 252);
        doc.rect(20, 50, 170, 20, 'F');
        doc.setDrawColor(34, 139, 34);
        doc.rect(20, 50, 170, 20, 'S');

        doc.setFontSize(12);
        doc.setTextColor(34, 139, 34);
        doc.text('Patient Information', 25, 62);

        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text(`Name: ${patientName}`, 25, 67);
        doc.text(`ID: ${patientId}`, 120, 67);

        let yPosition = 85;

        // Collect recommendation data from the page
        const recommendationData = collectRecommendationData();

        // Add personalized insights section
        if (recommendationData.insights && recommendationData.insights.length > 0) {
            yPosition = addSection(doc, 'Personalized Genetic Insights', recommendationData.insights, yPosition);
        }

        // Add food recommendations
        if (recommendationData.foodInclude && recommendationData.foodInclude.length > 0) {
            yPosition = addSection(doc, 'Recommended Foods', recommendationData.foodInclude, yPosition);
        }

        if (recommendationData.foodLimit && recommendationData.foodLimit.length > 0) {
            yPosition = addSection(doc, 'Foods to Limit', recommendationData.foodLimit, yPosition);
        }

        // Add daily routine recommendations
        if (recommendationData.routine && recommendationData.routine.length > 0) {
            yPosition = addSection(doc, 'Daily Routine Recommendations', recommendationData.routine, yPosition);
        }

        // Add wellness recommendations (parameter by parameter)
        if (recommendationData.wellness && recommendationData.wellness.length > 0) {
            yPosition = addSection(doc, 'Wellness Parameter Recommendations', recommendationData.wellness, yPosition);
        }

        // Add traits recommendations (parameter by parameter)
        if (recommendationData.traits && recommendationData.traits.length > 0) {
            yPosition = addSection(doc, 'Personal Traits Recommendations', recommendationData.traits, yPosition);
        }

        // Professional footer on all pages
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);

            doc.setDrawColor(200, 200, 200);
            doc.line(20, 280, 190, 280);

            doc.setFontSize(8);
            doc.setTextColor(128, 128, 128);
            doc.text(`Page ${i} of ${pageCount}`, 20, 285);
            doc.text('Generated by Codex Genetic Analysis System', 105, 285, { align: 'center' });
            doc.text(new Date().toLocaleString(), 190, 285, { align: 'right' });
        }

        // Save the PDF
        const fileName = `Codex_Personalized_Recommendations_${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(fileName);

        showSuccessMessage('Recommendations saved successfully as PDF!');

    } catch (error) {
        console.error('Error generating recommendations PDF:', error);
        alert('Error generating PDF. Please try again.');
    }
}

// Helper function to collect recommendation data from the page
function collectRecommendationData() {
    const data = {
        insights: [],
        foodInclude: [],
        foodLimit: [],
        routine: [],
        wellness: [],
        traits: []
    };

    // Collect insights from the main analysis section
    const insightsSection = document.querySelector('.bg-white.bg-opacity-70 .text-blue-800');
    if (insightsSection) {
        const insightPoints = insightsSection.querySelectorAll('p');
        insightPoints.forEach(point => {
            const text = point.textContent.trim();
            if (text && text.length > 20) {
                data.insights.push(text);
            }
        });
    }

    // Collect food recommendations
    const foodIncludeContainer = document.getElementById('personalized-foods-include');
    if (foodIncludeContainer) {
        const foodItems = foodIncludeContainer.querySelectorAll('.font-semibold');
        foodItems.forEach(item => {
            const name = item.textContent.trim();
            const description = item.nextElementSibling ? item.nextElementSibling.textContent.trim() : '';
            if (name) {
                data.foodInclude.push(`${name}: ${description}`);
            }
        });
    }

    const foodLimitContainer = document.getElementById('personalized-foods-limit');
    if (foodLimitContainer) {
        const foodItems = foodLimitContainer.querySelectorAll('.font-semibold');
        foodItems.forEach(item => {
            const name = item.textContent.trim();
            const description = item.nextElementSibling ? item.nextElementSibling.textContent.trim() : '';
            if (name) {
                data.foodLimit.push(`${name}: ${description}`);
            }
        });
    }

    // Collect routine recommendations
    const routineContainer = document.getElementById('personalized-routine');
    if (routineContainer) {
        const routineItems = routineContainer.querySelectorAll('.text-center');
        routineItems.forEach(item => {
            const time = item.querySelector('.font-bold')?.textContent.trim() || '';
            const title = item.querySelector('.font-semibold')?.textContent.trim() || '';
            const description = item.querySelector('.text-sm')?.textContent.trim() || '';
            if (time && title) {
                data.routine.push(`${time} - ${title}: ${description}`);
            }
        });
    }

    // Collect parameter-specific recommendations for wellness and traits
    if (typeof wellnessData !== 'undefined' && wellnessData.length > 0) {
        wellnessData.forEach(item => {
            const result = getParameterResult(item.name);
            if (result && result !== 'Analysis needed') {
                data.wellness.push(`${item.name}: ${result}`);
            }
        });
    }

    if (typeof traitsData !== 'undefined' && traitsData.length > 0) {
        traitsData.forEach(item => {
            const result = getParameterResult(item.name);
            if (result && result !== 'Analysis needed') {
                data.traits.push(`${item.name}: ${result}`);
            }
        });
    }

    return data;
}

// Helper function to add a section to the PDF
function addSection(doc, title, items, startY) {
    let yPosition = startY;
    const pageWidth = 170;
    const leftMargin = 20;
    const lineHeight = 6;

    // Check if we need a new page
    if (yPosition > 250) {
        doc.addPage();
        yPosition = 30;
    }

    // Section header
    doc.setFillColor(34, 139, 34);
    doc.rect(leftMargin, yPosition - 3, pageWidth, 12, 'F');

    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text(title, leftMargin + 5, yPosition + 5);
    yPosition += 20;

    // Section content
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);

    items.forEach((item, index) => {
        // Check if we need a new page
        if (yPosition > 260) {
            doc.addPage();
            yPosition = 30;
        }

        // Add alternating background for readability
        if (index % 2 === 0) {
            doc.setFillColor(248, 250, 252);
            doc.rect(leftMargin, yPosition - 2, pageWidth, lineHeight + 2, 'F');
        }

        // Clean and wrap text
        let cleanText = item.replace(/•/g, '').trim();
        const textLines = doc.splitTextToSize(cleanText, pageWidth - 10);

        // Add bullet point
        doc.setTextColor(34, 139, 34);
        doc.text('•', leftMargin + 5, yPosition + 4);

        // Add text content
        doc.setTextColor(0, 0, 0);
        doc.text(textLines, leftMargin + 15, yPosition + 4);

        yPosition += Math.max(lineHeight, textLines.length * 5);
    });

    return yPosition + 15;
}

// Helper function to get parameter result from patient data
function getParameterResult(parameterName) {
    if (window.patientResultsMap && window.patientResultsMap.has(parameterName)) {
        return window.patientResultsMap.get(parameterName).result;
    }

    // Try partial match if exact match not found
    if (window.patientResultsMap) {
        for (let [key, value] of window.patientResultsMap.entries()) {
            if (key.includes(parameterName) || parameterName.includes(key)) {
                return value.result;
            }
        }
    }

    return null;
}

// Auto-generate recommendations when comprehensive tab is opened
function autoGenerateRecommendations() {
    // Wait a bit for the page to fully load
    setTimeout(() => {
        const comprehensivePanel = document.getElementById('comprehensive-recommendations');
        if (comprehensivePanel && comprehensivePanel.querySelector('.animate-spin')) {
            // Only generate if we're still in loading state
            generateComprehensiveLifestyleRecommendations();
        }
    }, 1000);
}

// Initialize auto-generation when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoGenerateRecommendations);
} else {
    autoGenerateRecommendations();
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
            window.jspdf = window.jspdf || window.jspdf.jsPDF;
            resolve();
        };
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Helper function to show success messages
function showSuccessMessage(message) {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.style.cssText = `
            background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
            color: white;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            margin: 20px 0;
            font-weight: 600;
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        `;
    successMessage.innerHTML = message;
    document.body.appendChild(successMessage);

    setTimeout(() => {
        if (successMessage.parentNode) {
            successMessage.parentNode.removeChild(successMessage);
        }
    }, 3000);
}

// Professional PDF generation function for test results
async function saveTestResultsAsPDF() {
    try {
        // Check if jsPDF is available
        if (typeof window.jspdf === 'undefined') {
            await loadJSPDF();
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Set document properties
        doc.setProperties({
            title: 'Codex Genetic Test Results',
            subject: 'Comprehensive Genetic Analysis Report',
            author: 'Codex Genetic Analysis System',
            creator: 'Codex System'
        });

        // Professional header
        doc.setFillColor(34, 139, 34);
        doc.rect(0, 0, 210, 35, 'F');

        doc.setFontSize(22);
        doc.setTextColor(255, 255, 255);
        doc.text('Codex Genetic Analysis', 105, 20, { align: 'center' });

        doc.setFontSize(14);
        doc.text('Test Results Report', 105, 30, { align: 'center' });

        // Patient information
        doc.setFillColor(248, 250, 252);
        doc.rect(20, 45, 170, 25, 'F');
        doc.setDrawColor(34, 139, 34);
        doc.rect(20, 45, 170, 25, 'S');

        doc.setFontSize(12);
        doc.setTextColor(34, 139, 34);
        doc.text('Patient Information', 25, 57);

        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);

        // Get patient data from the page
        const patientNameElement = document.getElementById('patient-name');
        const patientIdElement = document.getElementById('patient-id');

        const patientName = patientNameElement ? patientNameElement.textContent.trim() : 'Patient Name';
        const patientId = patientIdElement ? patientIdElement.textContent.trim() : 'Patient ID';

        doc.text(`Name: ${patientName}`, 25, 67);
        doc.text(`ID: ${patientId}`, 120, 67);

        let yPosition = 85;
        const pageWidth = 170;
        const leftMargin = 20;

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
                    // Check if we need a new page
                    if (yPosition > 250) {
                        doc.addPage();
                        yPosition = 30;
                    }

                    // Test type header
                    doc.setFillColor(34, 139, 34);
                    doc.rect(leftMargin, yPosition - 5, pageWidth, 8, 'F');

                    doc.setFontSize(12);
                    doc.setTextColor(255, 255, 255);
                    doc.text(`${testType} Tests`, leftMargin + 5, yPosition);
                    yPosition += 15;

                    // Table header
                    doc.setFillColor(34, 139, 34);
                    doc.rect(leftMargin, yPosition - 2, pageWidth, 8, 'F');
                    doc.setFontSize(10);
                    doc.setTextColor(255, 255, 255);
                    doc.text('Parameter', leftMargin + 5, yPosition + 3);
                    doc.text('Result', leftMargin + 100, yPosition + 3);
                    yPosition += 12;

                    // Draw header border
                    doc.setDrawColor(34, 139, 34);
                    doc.line(leftMargin, yPosition - 2, leftMargin + pageWidth, yPosition - 2);
                    doc.line(leftMargin, yPosition - 2, leftMargin, yPosition + 6);
                    doc.line(leftMargin + pageWidth, yPosition - 2, leftMargin + pageWidth, yPosition + 6);
                    doc.line(leftMargin + 95, yPosition - 2, leftMargin + 95, yPosition + 6);

                    itemsWithResults.forEach((item, index) => {
                        try {
                            // Check if we need a new page
                            if (yPosition > 250) {
                                doc.addPage();
                                yPosition = 30;
                            }

                            const parameterName = item.dataset.originalName ||
                                item.textContent.replace(/Result Available[\s\S]*/i, '').trim();
                            const resultValue = item.dataset.resultValue || 'N/A';

                            // Clean result value
                            let cleanResult = resultValue;
                            if (typeof resultValue === 'string') {
                                cleanResult = resultValue
                                    .replace(/Result Available/gi, '')
                                    .replace(/Result:\s*/gi, '')
                                    .replace(/\s+/g, ' ')
                                    .trim();
                            }

                            // Add alternating row background
                            if (index % 2 === 0) {
                                doc.setFillColor(250, 250, 250);
                                doc.rect(leftMargin, yPosition - 2, pageWidth, 12, 'F');
                            }

                            // Parameter name
                            doc.setFontSize(8);
                            doc.setTextColor(0, 0, 0);
                            const paramLines = doc.splitTextToSize(parameterName, 80);
                            doc.text(paramLines, leftMargin + 5, yPosition + 4);

                            // Result
                            doc.setTextColor(100, 100, 100);
                            const resultLines = doc.splitTextToSize(cleanResult, 65);
                            doc.text(resultLines, leftMargin + 100, yPosition + 4);

                            // Row border
                            doc.setDrawColor(220, 220, 220);
                            doc.line(leftMargin, yPosition + 10, leftMargin + pageWidth, yPosition + 10);

                            yPosition += 12;

                        } catch (error) {
                            console.error('Error processing item:', error);
                        }
                    });

                    yPosition += 15;
                }
            }
        });

        // Professional footer
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);

            doc.setDrawColor(200, 200, 200);
            doc.line(20, 280, 190, 280);

            doc.setFontSize(8);
            doc.setTextColor(128, 128, 128);
            doc.text(`Page ${i} of ${pageCount}`, 20, 285);
            doc.text('Generated by Codex Genetic Analysis System', 105, 285, { align: 'center' });
            doc.text(new Date().toLocaleString(), 190, 285, { align: 'right' });
        }

        // Save the PDF
        const fileName = `Codex_Test_Results_${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(fileName);

        showSuccessMessage('Test Results PDF saved successfully!');

    } catch (error) {
        console.error('Error generating test results PDF:', error);
        alert('Error generating PDF. Please try again.');
    }
}

// Function to analyze user results and generate personalized recommendations - ENHANCED for specificity
async function analyzeUserResultsAndGenerateRecommendations(testTypes, userResults) {
    let recommendations = [];

    // Analyze wellness results and provide specific recommendations
    if (userResults.wellness && userResults.wellness.length > 0) {
        recommendations.push("WELLNESS MARKERS ANALYSIS - Your Personalized Health Recommendations:");

        userResults.wellness.forEach(item => {
            const result = item.result.toLowerCase();
            const name = item.name.toLowerCase();

            // Vitamin D Analysis
            if (name.includes('vitamin d')) {
                if (result.includes('low') || result.includes('deficient')) {
                    recommendations.push("• VITAMIN D DEFICIENCY DETECTED: Your levels are critically low. IMMEDIATE ACTION: Take 2000-4000 IU daily, get 15-20 minutes sun exposure between 10 AM-3 PM, consume fatty fish (salmon, mackerel) 3x/week, add fortified dairy/plant milk. Monitor levels every 3 months.");
                } else if (result.includes('normal')) {
                    recommendations.push("• VITAMIN D STATUS: Optimal levels maintained. CONTINUE: 15 minutes daily sun exposure, fatty fish 2x/week, fortified foods. Recheck annually.");
                }
            }

            // Caffeine Sensitivity Analysis
            if (name.includes('caffeine')) {
                if (result.includes('anxiety') || result.includes('sensitive')) {
                    recommendations.push("• CAFFEINE SENSITIVITY: You metabolize caffeine slowly. STRICT LIMITS: Maximum 1 cup coffee (100mg) before 10 AM, avoid energy drinks completely, choose decaf alternatives. Monitor heart rate and anxiety levels.");
                } else if (result.includes('performance') || result.includes('enhanced')) {
                    recommendations.push("• CAFFEINE PERFORMANCE: You're a fast metabolizer. OPTIMIZE: Take 200-400mg 30 minutes before exercise, consume 2-3 cups coffee daily for maximum performance benefits.");
                }
            }

            // Lactose Intolerance Analysis
            if (name.includes('lactose')) {
                if (result.includes('intolerance')) {
                    recommendations.push("• LACTOSE INTOLERANCE CONFIRMED: Your body cannot digest lactose. COMPLETE AVOIDANCE: Choose lactose-free dairy, almond/coconut milk, take lactase enzyme (9000 units) with any dairy. Monitor for hidden lactose in processed foods.");
                }
            }

            // Celiac Disease Analysis
            if (name.includes('gluten') || name.includes('celiac')) {
                if (result.includes('predisposition') || result.includes('risk')) {
                    recommendations.push("• CELIAC DISEASE RISK: High genetic predisposition detected. CRITICAL: Eliminate ALL gluten (wheat, barley, rye), choose certified gluten-free products, consult gastroenterologist for testing. Monitor for symptoms: bloating, diarrhea, fatigue.");
                }
            }

            // Blood Pressure Analysis
            if (name.includes('blood pressure')) {
                if (result.includes('high') || result.includes('elevated') || result.includes('systolic') || result.includes('diastolic')) {
                    recommendations.push("• BLOOD PRESSURE ELEVATED: Your cardiovascular risk is increased. IMMEDIATE CHANGES: Reduce sodium to <1500mg/day, increase potassium (bananas, spinach, sweet potatoes), daily cardio exercise (30-45 min), stress management (meditation, yoga). Monitor BP weekly.");
                }
            }

            // Cholesterol Analysis
            if (name.includes('cholesterol') || name.includes('hdl') || name.includes('ldl')) {
                if (result.includes('high') || result.includes('elevated') || result.includes('ldl')) {
                    recommendations.push("• CHOLESTEROL ELEVATED: High cardiovascular risk. SPECIFIC DIET: Increase soluble fiber (oats 1 cup daily, beans 1/2 cup 3x/week), omega-3 (fatty fish 3x/week, walnuts 1/4 cup daily), limit saturated fats to <7% daily calories. Exercise 5x/week.");
                }
            }

            // Blood Glucose Analysis
            if (name.includes('blood glucose') || name.includes('glucose') || name.includes('glycated')) {
                if (result.includes('elevated') || result.includes('high') || result.includes('prediabetes')) {
                    recommendations.push("• BLOOD GLUCOSE ELEVATED: Prediabetes risk detected. CRITICAL DIET: Choose low glycemic foods (quinoa, steel-cut oats, legumes), increase fiber to 30g/day, eat every 3-4 hours, avoid refined carbs completely. Monitor glucose 2x daily.");
                }
            }

            // Antioxidant Capacity Analysis
            if (name.includes('antioxidant') || name.includes('oxidative')) {
                if (result.includes('low') || result.includes('decreased')) {
                    recommendations.push("• ANTIOXIDANT CAPACITY LOW: Increased oxidative stress risk. BOOST IMMEDIATELY: Consume colorful fruits/vegetables (aim for 9 servings daily), add berries (1 cup daily), green tea (3 cups daily), dark chocolate 70%+ (1 oz daily).");
                }
            }

            // Bone Mineral Density Analysis
            if (name.includes('bone') || name.includes('mineral') || name.includes('calcium')) {
                if (result.includes('low') || result.includes('decreased') || result.includes('osteoporosis')) {
                    recommendations.push("• BONE DENSITY CONCERN: Osteoporosis risk increased. CRITICAL: Calcium 1200mg daily (dairy, leafy greens, fortified foods), Vitamin D 2000 IU daily, weight-bearing exercise (walking, dancing) 30 min daily, avoid smoking/alcohol.");
                }
            }
        });
    }

    // Analyze traits results and provide specific recommendations - ENHANCED for specificity
    if (userResults.traits && userResults.traits.length > 0) {
        recommendations.push("\nPERSONAL TRAITS ANALYSIS - Your Genetic Behavioral Profile:");

        userResults.traits.forEach(item => {
            const result = item.result.toLowerCase();
            const name = item.name.toLowerCase();

            // Sleep Chronotype Analysis
            if (name.includes('sleep') || name.includes('circadian') || name.includes('morning') || name.includes('night')) {
                if (result.includes('morning') || result.includes('early')) {
                    recommendations.push("• MORNING CHRONOTYPE CONFIRMED: You're genetically programmed to be most alert early. OPTIMIZE: Schedule critical tasks 6-11 AM, exercise 6-8 AM, avoid late meetings, maintain 9-10 PM bedtime. Your peak performance window is 6 AM-2 PM.");
                } else if (result.includes('night') || result.includes('evening') || result.includes('owl')) {
                    recommendations.push("• NIGHT OWL CHRONOTYPE: Your peak performance is evening. OPTIMIZE: Schedule important work 2-8 PM, exercise 6-8 PM, avoid early morning commitments, maintain consistent 12-1 AM bedtime. Your creative peak is 8 PM-12 AM.");
                }
            }

            // Taste Sensitivity Analysis
            if (name.includes('taste') || name.includes('bitter') || name.includes('sweet') || name.includes('preference')) {
                if (result.includes('bitter') || result.includes('sensitive')) {
                    recommendations.push("• BITTER TASTE SENSITIVITY: You're genetically sensitive to bitter compounds. STRATEGY: Gradually introduce bitter vegetables (start with 1/4 cup kale, Brussels sprouts) paired with sweet accompaniments (honey, maple syrup). Your taste buds will adapt over 2-3 weeks.");
                } else if (result.includes('sweet') || result.includes('preference')) {
                    recommendations.push("• SWEET PREFERENCE GENETIC: You have increased sweet taste receptors. MANAGE: Satisfy cravings with natural sweeteners (fruits, honey, stevia), limit refined sugars to <25g daily, choose dark chocolate 70%+ for antioxidants. Monitor blood glucose if consuming sweet foods.");
                }
            }

            // Exercise Response Analysis
            if (name.includes('exercise') || name.includes('endurance') || name.includes('strength') || name.includes('performance')) {
                if (result.includes('endurance') || result.includes('aerobic')) {
                    recommendations.push("• ENDURANCE GENETIC PROFILE: You're built for sustained activity. OPTIMIZE: Incorporate 45-60 minute cardio sessions 4-5x/week, focus on running, cycling, swimming. Your body excels at fat burning during long, moderate-intensity exercise.");
                } else if (result.includes('strength') || result.includes('power')) {
                    recommendations.push("• STRENGTH GENETIC PROFILE: You have increased muscle building potential. OPTIMIZE: Progressive resistance training 3-4x/week, compound movements (squats, deadlifts, bench press), 6-8 reps with heavy weights. Your muscles respond well to high-intensity, short-duration training.");
                }
            }

            // Stress Response Analysis
            if (name.includes('stress') || name.includes('anxiety') || name.includes('cortisol')) {
                if (result.includes('high') || result.includes('sensitive') || result.includes('elevated')) {
                    recommendations.push("• STRESS SENSITIVITY: You're genetically prone to elevated stress responses. CRITICAL: Practice daily stress management (meditation 20 min, deep breathing 3x/day), prioritize sleep hygiene, avoid caffeine after 2 PM, consider adaptogenic herbs (ashwagandha, rhodiola).");
                }
            }

            // Pain Sensitivity Analysis
            if (name.includes('pain') || name.includes('sensitivity') || name.includes('nociception')) {
                if (result.includes('high') || result.includes('sensitive')) {
                    recommendations.push("• PAIN SENSITIVITY: You experience pain more intensely. STRATEGY: Use heat/cold therapy, gentle stretching, low-impact exercise (swimming, yoga), consider natural pain relief (turmeric, ginger, omega-3). Consult healthcare provider for pain management strategies.");
                }
            }
        });
    }

    // Analyze complex disease risks and provide lifestyle recommendations - ENHANCED for specificity
    if (userResults.complex && userResults.complex.length > 0) {
        recommendations.push("\nCOMPLEX DISEASE RISK ANALYSIS - Your Preventive Health Strategy:");

        const highRiskItems = userResults.complex.filter(item =>
            item.result.toLowerCase().includes('high') ||
            item.result.toLowerCase().includes('elevated') ||
            item.result.toLowerCase().includes('increased') ||
            item.result.toLowerCase().includes('risk') ||
            item.result.toLowerCase().includes('predisposition')
        );

        if (highRiskItems.length > 0) {
            recommendations.push("HIGH-RISK GENETIC PROFILE DETECTED: You have multiple elevated risk factors requiring immediate attention and preventive measures.");

            highRiskItems.forEach(item => {
                const name = item.name.toLowerCase();
                const result = item.result.toLowerCase();

                // Diabetes Risk Analysis
                if (name.includes('diabetes') || name.includes('glucose') || name.includes('insulin') || name.includes('metabolic')) {
                    if (result.includes('high') || result.includes('elevated') || result.includes('risk')) {
                        recommendations.push("• DIABETES RISK: High genetic predisposition detected. CRITICAL PREVENTION: Monitor blood glucose weekly, maintain HbA1c <5.7%, consume low glycemic foods (quinoa, steel-cut oats), exercise 30 min daily, maintain BMI <25. Consult endocrinologist for baseline testing.");
                    }
                }

                // Cardiovascular Risk Analysis
                if (name.includes('heart') || name.includes('cardiovascular') || name.includes('coronary') || name.includes('stroke')) {
                    if (result.includes('high') || result.includes('elevated') || result.includes('risk')) {
                        recommendations.push("• CARDIOVASCULAR RISK: Elevated genetic risk for heart disease. IMMEDIATE ACTION: Monitor blood pressure daily, maintain LDL <100 mg/dL, consume omega-3 (2g daily), Mediterranean diet, cardio exercise 45 min 5x/week, stress management (meditation, yoga). Annual cardiac screening required.");
                    }
                }

                // Cancer Risk Analysis
                if (name.includes('cancer') || name.includes('oncogene') || name.includes('tumor') || name.includes('malignancy')) {
                    if (result.includes('high') || result.includes('elevated') || result.includes('risk')) {
                        recommendations.push("• CANCER RISK: Increased genetic susceptibility detected. PREVENTIVE STRATEGY: Increase cruciferous vegetables (broccoli, kale) 2 cups daily, antioxidants (berries, green tea) 3x daily, maintain healthy weight, avoid processed meats, limit alcohol to <1 drink daily. Annual cancer screening recommended.");
                    }
                }

                // Autoimmune Risk Analysis
                if (name.includes('autoimmune') || name.includes('inflammation') || name.includes('rheumatoid') || name.includes('lupus')) {
                    if (result.includes('high') || result.includes('elevated') || result.includes('risk')) {
                        recommendations.push("• AUTOIMMUNE RISK: Genetic predisposition to inflammatory conditions. PREVENTION: Anti-inflammatory diet (turmeric, ginger, omega-3), stress reduction, adequate sleep (7-9 hours), avoid environmental triggers, regular exercise. Monitor for early symptoms (fatigue, joint pain, rashes).");
                    }
                }

                // Neurological Risk Analysis
                if (name.includes('alzheimer') || name.includes('dementia') || name.includes('cognitive') || name.includes('brain')) {
                    if (result.includes('high') || result.includes('elevated') || result.includes('risk')) {
                        recommendations.push("• NEUROLOGICAL RISK: Increased risk for cognitive decline. BRAIN HEALTH: Mental stimulation (puzzles, learning), physical exercise (aerobic 30 min daily), Mediterranean diet, adequate sleep, social engagement, stress management. Consider cognitive baseline testing.");
                    }
                }
            });
        } else {
            recommendations.push("LOW-RISK GENETIC PROFILE: Your complex disease risk factors are within normal ranges. MAINTAIN: Continue healthy lifestyle habits, annual health checkups, and preventive screenings as recommended by your healthcare provider.");
        }
    }

    // Analyze pharmacogenomics and provide medication guidance
    if (userResults.pharma && userResults.pharma.length > 0) {
        recommendations.push("\nBased on your medication response profile, here are your personalized recommendations:");

        userResults.pharma.forEach(item => {
            const result = item.result.toLowerCase();
            const name = item.name.toLowerCase();

            if (result.includes('poor metabolizer')) {
                recommendations.push("• You're a poor metabolizer - medications may stay in your system longer, requiring lower doses and closer monitoring.");
            } else if (result.includes('ultra-rapid metabolizer')) {
                recommendations.push("• You're an ultra-rapid metabolizer - medications may be processed too quickly, potentially requiring higher doses.");
            } else if (result.includes('intermediate')) {
                recommendations.push("• You have intermediate metabolism - standard dosing is usually appropriate, but monitor for side effects.");
            }
        });
    }

    // Add general lifestyle recommendations based on test types
    if (testTypes.includes('Wellness')) {
        recommendations.push("\nGeneral Wellness Recommendations:");
        recommendations.push("• Maintain a balanced diet rich in colorful fruits and vegetables");
        recommendations.push("• Stay hydrated with 8-10 glasses of water daily");
        recommendations.push("• Get 7-9 hours of quality sleep each night");
        recommendations.push("• Exercise for at least 150 minutes per week");
    }

    if (testTypes.includes('Personal Traits')) {
        recommendations.push("\nPersonal Development Recommendations:");
        recommendations.push("• Work with your natural tendencies rather than against them");
        recommendations.push("• Create environments that support your genetic predispositions");
        recommendations.push("• Use your strengths to compensate for areas of challenge");
    }

    if (testTypes.includes('GENETIC SUSCEPTIBILITY TO HEALTH DISORDERS')) {
        recommendations.push("\nPreventive Health Recommendations:");
        recommendations.push("• Schedule regular health check-ups and screenings");
        recommendations.push("• Maintain a healthy weight and body composition");
        recommendations.push("• Practice stress management and mental health care");
        recommendations.push("• Avoid smoking and limit alcohol consumption");
    }

    return recommendations.join('\n');
}

// Function to populate personalized food recommendations
function populatePersonalizedFoodRecommendations(userResults) {
    const foodsInclude = document.getElementById('personalized-foods-include');
    const foodsLimit = document.getElementById('personalized-foods-limit');

    if (!foodsInclude || !foodsLimit) return;

    let includeFoods = [];
    let limitFoods = [];

    // Analyze wellness results for food recommendations
    if (userResults.wellness) {
        userResults.wellness.forEach(item => {
            const result = item.result.toLowerCase();
            const name = item.name.toLowerCase();

            if (name.includes('vitamin d') && result.includes('low')) {
                includeFoods.push({
                    icon: '🌞',
                    name: 'Vitamin D Rich Foods',
                    description: 'Fatty fish (salmon, mackerel), egg yolks, fortified dairy, mushrooms'
                });
            }

            if (name.includes('vitamin c') && result.includes('low')) {
                includeFoods.push({
                    icon: '🍊',
                    name: 'Vitamin C Rich Foods',
                    description: 'Citrus fruits, bell peppers, strawberries, broccoli, kiwi'
                });
            }

            if (name.includes('vitamin b12') && result.includes('low')) {
                includeFoods.push({
                    icon: '🥩',
                    name: 'Vitamin B12 Sources',
                    description: 'Lean meats, fish, eggs, fortified cereals, nutritional yeast'
                });
            }

            if (name.includes('calcium') && result.includes('low')) {
                includeFoods.push({
                    icon: '🥛',
                    name: 'Calcium Rich Foods',
                    description: 'Dairy products, leafy greens, almonds, fortified plant milks'
                });
            }

            if (name.includes('iron') && result.includes('low')) {
                includeFoods.push({
                    icon: '🥩',
                    name: 'Iron Rich Foods',
                    description: 'Lean red meat, spinach, lentils, pumpkin seeds, dark chocolate'
                });
            }

            if (name.includes('omega') && result.includes('low')) {
                includeFoods.push({
                    icon: '🐟',
                    name: 'Omega-3 Rich Foods',
                    description: 'Fatty fish, walnuts, chia seeds, flaxseeds, hemp seeds'
                });
            }

            if (name.includes('lactose') && result.includes('intolerance')) {
                limitFoods.push({
                    icon: '🥛',
                    name: 'Lactose Containing Foods',
                    description: 'Regular milk, ice cream, soft cheeses, yogurt'
                });
                includeFoods.push({
                    icon: '🥥',
                    name: 'Lactose-Free Alternatives',
                    description: 'Almond milk, coconut milk, lactose-free dairy, hard cheeses'
                });
            }

            if (name.includes('gluten') || name.includes('celiac')) {
                limitFoods.push({
                    icon: '🍞',
                    name: 'Gluten Containing Foods',
                    description: 'Wheat, barley, rye products, most breads, pastas, cereals'
                });
                includeFoods.push({
                    icon: '🌾',
                    name: 'Gluten-Free Alternatives',
                    description: 'Quinoa, rice, corn, buckwheat, certified gluten-free oats'
                });
            }

            if (name.includes('blood pressure') && (result.includes('high') || result.includes('elevated'))) {
                limitFoods.push({
                    icon: '🧂',
                    name: 'High Sodium Foods',
                    description: 'Processed foods, canned soups, deli meats, salty snacks'
                });
                includeFoods.push({
                    icon: '🥑',
                    name: 'Potassium Rich Foods',
                    description: 'Bananas, spinach, sweet potatoes, avocados, tomatoes'
                });
            }

            if (name.includes('cholesterol') && result.includes('high')) {
                limitFoods.push({
                    icon: '🥓',
                    name: 'High Saturated Fat Foods',
                    description: 'Fatty meats, full-fat dairy, butter, coconut oil, palm oil'
                });
                includeFoods.push({
                    icon: '🌾',
                    name: 'Soluble Fiber Foods',
                    description: 'Oats, beans, lentils, apples, pears, psyllium husk'
                });
            }

            if (name.includes('blood glucose') && result.includes('elevated')) {
                limitFoods.push({
                    icon: '🍰',
                    name: 'High Glycemic Foods',
                    description: 'White bread, white rice, sugary drinks, candies, pastries'
                });
                includeFoods.push({
                    icon: '🥬',
                    name: 'Low Glycemic Foods',
                    description: 'Non-starchy vegetables, whole grains, legumes, nuts, seeds'
                });
            }
        });
    }

    // Analyze traits for food preferences
    if (userResults.traits) {
        userResults.traits.forEach(item => {
            const result = item.result.toLowerCase();
            const name = item.name.toLowerCase();

            if (name.includes('taste') && result.includes('bitter')) {
                includeFoods.push({
                    icon: '🥬',
                    name: 'Gradual Bitter Foods',
                    description: 'Start with milder greens like spinach, then progress to kale and arugula'
                });
            }

            if (name.includes('sweet') && result.includes('preference')) {
                limitFoods.push({
                    icon: '🍭',
                    name: 'Refined Sugars',
                    description: 'Candies, sodas, white sugar, high-fructose corn syrup'
                });
                includeFoods.push({
                    icon: '🍯',
                    name: 'Natural Sweeteners',
                    description: 'Fresh fruits, honey, maple syrup, stevia, monk fruit'
                });
            }
        });
    }

    // Add default recommendations if no specific ones found
    if (includeFoods.length === 0) {
        includeFoods = [
            {
                icon: '🥬',
                name: 'Leafy Greens',
                description: 'Spinach, kale, arugula for vitamins and minerals'
            },
            {
                icon: '🐟',
                name: 'Fatty Fish',
                description: 'Salmon, mackerel for omega-3 fatty acids'
            },
            {
                icon: '🥜',
                name: 'Nuts & Seeds',
                description: 'Almonds, walnuts, chia seeds for healthy fats'
            },
            {
                icon: '🫐',
                name: 'Berries',
                description: 'Blueberries, strawberries for antioxidants'
            }
        ];
    }

    if (limitFoods.length === 0) {
        limitFoods = [
            {
                icon: '🍰',
                name: 'Processed Sugars',
                description: 'Candies, sodas, refined carbohydrates'
            },
            {
                icon: '🥓',
                name: 'Processed Meats',
                description: 'Bacon, sausages, deli meats'
            },
            {
                icon: '🍟',
                name: 'Fried Foods',
                description: 'Deep-fried items, trans fats'
            },
            {
                icon: '🧂',
                name: 'Excess Sodium',
                description: 'High-salt processed foods'
            }
        ];
    }

    // Populate the include foods section
    foodsInclude.innerHTML = includeFoods.map(food => `
            <div class="flex items-center space-x-3 bg-white bg-opacity-50 rounded-lg p-3">
                <span class="text-2xl">${food.icon}</span>
                <div>
                    <p class="font-semibold text-green-800">${food.name}</p>
                    <p class="text-sm text-green-600">${food.description}</p>
                </div>
            </div>
        `).join('');

    // Populate the limit foods section
    foodsLimit.innerHTML = limitFoods.map(food => `
            <div class="flex items-center space-x-3 bg-white bg-opacity-50 rounded-lg p-3">
                <span class="text-2xl">${food.icon}</span>
                <div>
                    <p class="font-semibold text-red-800">${food.name}</p>
                    <p class="text-sm text-red-600">${food.description}</p>
                </div>
            </div>
        `).join('');
}

// Function to populate personalized daily routine
function populatePersonalizedRoutine(userResults) {
    const routineContainer = document.getElementById('personalized-routine');
    if (!routineContainer) return;

    let routineItems = [];

    // Analyze traits for sleep patterns and preferences
    let isMorningPerson = false;
    let isNightOwl = false;
    let hasExerciseEndurance = false;
    let hasStrengthPotential = false;

    if (userResults.traits) {
        userResults.traits.forEach(item => {
            const result = item.result.toLowerCase();
            const name = item.name.toLowerCase();

            if (name.includes('sleep') && result.includes('morning')) {
                isMorningPerson = true;
            } else if (name.includes('sleep') && result.includes('night')) {
                isNightOwl = true;
            }

            if (name.includes('exercise') && result.includes('endurance')) {
                hasExerciseEndurance = true;
            } else if (name.includes('exercise') && result.includes('strength')) {
                hasStrengthPotential = true;
            }
        });
    }

    // Generate personalized routine based on traits
    if (isMorningPerson) {
        routineItems.push({
            icon: '🌅',
            time: '6-8 AM',
            title: 'Early Bird Advantage',
            description: 'Use your natural energy peak for important tasks, exercise, and planning'
        });
    } else if (isNightOwl) {
        routineItems.push({
            icon: '🌙',
            time: '10-12 PM',
            title: 'Night Owl Peak',
            description: 'Schedule creative work and problem-solving during your energy peak'
        });
    } else {
        routineItems.push({
            icon: '🌅',
            time: '7-9 AM',
            title: 'Morning Routine',
            description: 'Start with water, protein-rich breakfast, and light stretching'
        });
    }

    // Add midday routine
    routineItems.push({
        icon: '☀️',
        time: '12-2 PM',
        title: 'Midday Energy',
        description: 'Balanced lunch with vegetables, lean protein, and whole grains'
    });

    // Add evening routine
    if (isNightOwl) {
        routineItems.push({
            icon: '🌙',
            time: '8-10 PM',
            title: 'Evening Productivity',
            description: 'Use your natural energy for focused work and planning'
        });
    } else {
        routineItems.push({
            icon: '🌙',
            time: '6-8 PM',
            title: 'Evening Wind Down',
            description: 'Light dinner, hydration, and preparation for rest'
        });
    }

    // Add exercise recommendations based on genetic profile
    if (hasExerciseEndurance) {
        routineItems.push({
            icon: '🏃‍♂️',
            time: '5-7 PM',
            title: 'Endurance Training',
            description: 'Long cardio sessions, interval training, and endurance building'
        });
    } else if (hasStrengthPotential) {
        routineItems.push({
            icon: '💪',
            time: '5-7 PM',
            title: 'Strength Training',
            description: 'Progressive resistance training with compound movements'
        });
    } else {
        routineItems.push({
            icon: '🏃‍♂️',
            time: '5-7 PM',
            title: 'Moderate Exercise',
            description: '30-45 minutes of cardio or strength training'
        });
    }

    // Populate the routine container
    routineContainer.innerHTML = routineItems.map(item => `
            <div class="text-center bg-white bg-opacity-50 rounded-xl p-6">
                <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-3xl">${item.icon}</span>
                </div>
                <h5 class="font-bold text-purple-800 mb-2">${item.time}</h5>
                <p class="font-semibold text-purple-700 mb-2">${item.title}</p>
                <p class="text-sm text-purple-600">${item.description}</p>
            </div>
        `).join('');
}

// Function to save recommendations as a formatted text file
function saveRecommendationsAsText() {
    try {
        // Get patient information
        const patientNameElement = document.getElementById('patient-name');
        const patientIdElement = document.getElementById('patient-id');
        const patientName = patientNameElement ? patientNameElement.textContent.trim() : 'Patient Name';
        const patientId = patientIdElement ? patientIdElement.textContent.trim() : 'Patient ID';

        // Create formatted text content
        let textContent = '';

        // Header
        textContent += '='.repeat(80) + '\n';
        textContent += '                    YOUR PERSONALIZED LIFESTYLE PLAN\n';
        textContent += '                    Based on your genetic test results\n';
        textContent += '='.repeat(80) + '\n\n';

        // Patient Information
        textContent += 'PATIENT INFORMATION\n';
        textContent += '-'.repeat(40) + '\n';
        textContent += `Name: ${patientName}\n`;
        textContent += `ID: ${patientId}\n`;
        textContent += `Generated: ${new Date().toLocaleString()}\n\n`;

        // Personalized Insights
        const insightsSection = document.querySelector('.personalized-insights');
        if (insightsSection) {
            textContent += 'PERSONALIZED GENETIC INSIGHTS\n';
            textContent += '-'.repeat(40) + '\n';
            const insights = insightsSection.querySelectorAll('p, li');
            insights.forEach(insight => {
                const text = insight.textContent.trim();
                if (text && text.length > 10) {
                    textContent += `• ${text}\n`;
                }
            });
            textContent += '\n';
        }

        // Food Recommendations
        const foodIncludeContainer = document.getElementById('personalized-foods-include');
        if (foodIncludeContainer) {
            textContent += 'RECOMMENDED FOODS\n';
            textContent += '-'.repeat(40) + '\n';
            const foodItems = foodIncludeContainer.querySelectorAll('.font-semibold');
            foodItems.forEach(item => {
                const name = item.textContent.trim();
                const description = item.nextElementSibling ? item.nextElementSibling.textContent.trim() : '';
                if (name) {
                    textContent += `• ${name}`;
                    if (description) textContent += `: ${description}`;
                    textContent += '\n';
                }
            });
            textContent += '\n';
        }

        const foodLimitContainer = document.getElementById('personalized-foods-limit');
        if (foodLimitContainer) {
            textContent += 'FOODS TO LIMIT\n';
            textContent += '-'.repeat(40) + '\n';
            const foodItems = foodLimitContainer.querySelectorAll('.font-semibold');
            foodItems.forEach(item => {
                const name = item.textContent.trim();
                const description = item.nextElementSibling ? item.nextElementSibling.textContent.trim() : '';
                if (name) {
                    textContent += `• ${name}`;
                    if (description) textContent += `: ${description}`;
                    textContent += '\n';
                }
            });
            textContent += '\n';
        }

        // Daily Routine
        const routineContainer = document.getElementById('personalized-routine');
        if (routineContainer) {
            textContent += 'DAILY ROUTINE RECOMMENDATIONS\n';
            textContent += '-'.repeat(40) + '\n';
            const routineItems = routineContainer.querySelectorAll('.text-center');
            routineItems.forEach(item => {
                const time = item.querySelector('h5')?.textContent.trim();
                const title = item.querySelector('p.font-semibold')?.textContent.trim();
                const description = item.querySelector('p.text-sm')?.textContent.trim();

                if (time && title) {
                    textContent += `${time} - ${title}\n`;
                    if (description) textContent += `  ${description}\n`;
                    textContent += '\n';
                }
            });
        }

        // Parameter-specific recommendations
        const wellnessContainer = document.querySelector('.wellness-recommendations');
        if (wellnessContainer) {
            textContent += 'WELLNESS PARAMETER RECOMMENDATIONS\n';
            textContent += '-'.repeat(40) + '\n';
            const recommendations = wellnessContainer.querySelectorAll('.recommendation-item');
            recommendations.forEach(rec => {
                const parameter = rec.querySelector('h4')?.textContent.trim();
                const recommendation = rec.querySelector('p')?.textContent.trim();
                if (parameter && recommendation) {
                    textContent += `${parameter}\n`;
                    textContent += `  ${recommendation}\n\n`;
                }
            });
        }

        const traitsContainer = document.querySelector('.traits-recommendations');
        if (traitsContainer) {
            textContent += 'PERSONAL TRAITS RECOMMENDATIONS\n';
            textContent += '-'.repeat(40) + '\n';
            const recommendations = traitsContainer.querySelectorAll('.recommendation-item');
            recommendations.forEach(rec => {
                const parameter = rec.querySelector('h4')?.textContent.trim();
                const recommendation = rec.querySelector('p')?.textContent.trim();
                if (parameter && recommendation) {
                    textContent += `${parameter}\n`;
                    textContent += `  ${recommendation}\n\n`;
                }
            });
        }

        // Footer
        textContent += '='.repeat(80) + '\n';
        textContent += 'Generated by Codex Genetic Analysis System\n';
        textContent += 'For personalized health guidance based on your genetic profile\n';
        textContent += '='.repeat(80) + '\n';

        // Create and download text file
        const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Codex_Recommendations_${patientName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showSuccessMessage('Recommendations saved as text file successfully!');

    } catch (error) {
        console.error('Error saving recommendations as text:', error);
        alert('Error saving text file. Please try again.');
    }
}

// Function to disable copy/paste functionality
function disableCopyPaste() {
    // Disable context menu (right-click)
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
    });

    // Disable copy (Ctrl+C, Cmd+C)
    document.addEventListener('keydown', function (e) {
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
    document.addEventListener('dragstart', function (e) {
        e.preventDefault();
        return false;
    });

    // Disable text selection via mouse
    document.addEventListener('mousedown', function (e) {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && !e.target.hasAttribute('contenteditable')) {
            e.preventDefault();
            return false;
        }
    });

    // Disable text selection via touch
    document.addEventListener('touchstart', function (e) {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && !e.target.hasAttribute('contenteditable')) {
            e.preventDefault();
            return false;
        }
        return true;
    });

    // Show message when user tries to copy
    document.addEventListener('copy', function (e) {
        e.preventDefault();
        showCopyProtectionMessage();
        return false;
    });

    // Show message when user tries to paste
    document.addEventListener('paste', function (e) {
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