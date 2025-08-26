# 🧬 Genetic Test Recommendation System

## Overview
This system provides personalized recommendations for users based on their genetic test results. It includes three types of recommendations:

1. **Wellness Parameter Recommendations** - Specific advice for each wellness parameter
2. **Traits Parameter Recommendations** - Personalized lifestyle advice for personal traits
3. **General Lifestyle Recommendations** - Comprehensive advice based on all test types taken

## Features

### 🔧 AI-Powered Recommendations
- Uses OpenAI GPT-3.5-turbo for dynamic, personalized recommendations
- Fallback recommendations when API is unavailable
- Regeneratable recommendations with fresh AI insights

### 📊 Parameter-Specific Recommendations
- **Wellness**: 44 parameters with nutrition, exercise, and health advice
- **Traits**: 81 parameters with lifestyle and behavioral recommendations
- **Genetic Susceptibility to Health Disorders**: Risk-based preventive recommendations
- **Pharmacogenomics**: Medication metabolism advice
- **Familial Genetic Conditions**: Condition-specific guidance

### 🎯 Comprehensive Lifestyle Panel
- New "Lifestyle Recommendations" tab
- AI-generated comprehensive advice
- Categorized recommendations (Diet, Exercise, Lifestyle, Prevention)

## Installation & Setup

### 1. Include Scripts
Add the recommendation engine to your HTML:

```html
<!-- Load Recommendation Engine -->
<script src="Scripts/recommendation_engine.js"></script>
<!-- Then Load Main Logic -->
<script src="Scripts/main_user_page.js"></script>
```

### 2. API Configuration
The system uses your OpenAI API key:
```javascript
this.apiKey = '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';
```

## Usage

### Individual Parameter Recommendations
Each parameter detail view now includes a recommendations section:

```javascript
// Generate recommendations for a specific parameter
generateRecommendations(parameterName, resultValue, containerId);

// Regenerate with AI
regenerateRecommendation(parameterName, resultValue, containerId);
```

### Comprehensive Recommendations
Access the new "Lifestyle Recommendations" tab to get comprehensive advice:

```javascript
// Generate comprehensive lifestyle recommendations
generateComprehensiveLifestyleRecommendations();
```

## API Functions

### RecommendationEngine Class

#### `generateWellnessRecommendations(parameterName, resultValue)`
Generates wellness-specific recommendations using AI.

#### `generateTraitsRecommendations(parameterName, resultValue)`
Generates trait-specific lifestyle recommendations using AI.

#### `generateGeneralRecommendations(testTypes, overallResults)`
Generates comprehensive lifestyle advice based on all test types taken.

#### `generateComprehensiveReport(testResults)`
Generates a complete report with all recommendation types.

## Fallback Recommendations

When the AI API is unavailable, the system provides pre-written recommendations:

### Wellness Examples
- **Blood glucose**: "Maintain stable blood sugar through regular meals, complex carbohydrates, and regular physical activity."
- **Vitamin D levels**: "Get regular sun exposure and include vitamin D-rich foods or consider supplementation."

### Traits Examples
- **Height**: "Focus on maintaining good posture and bone health through nutrition and exercise."
- **Sleep duration**: "Establish consistent sleep patterns and prioritize adequate rest."

## Testing

Use the test file to verify functionality:

```bash
open test_recommendations.html
```

This will test:
- Fallback wellness recommendations
- Fallback traits recommendations
- AI-generated recommendations
- Comprehensive lifestyle recommendations

## Integration Points

### Main User Page
- Recommendations automatically appear in parameter detail views
- Integrated with existing tab system
- Uses Lucide icons for consistent UI

### Patient Results Handler
- Recommendations work with uploaded patient results
- Dynamic result-based advice generation

## Error Handling

The system gracefully handles:
- API connection failures
- Rate limiting
- Invalid responses
- Network timeouts

Fallback recommendations ensure users always receive helpful advice.

## Customization

### Adding New Parameters
1. Add to `wellnessRecommendations` or `traitsRecommendations` objects
2. Include fallback recommendation text
3. System automatically handles new parameters

### Modifying AI Prompts
Edit the prompt templates in the RecommendationEngine class:

```javascript
const prompt = `Your custom prompt for ${parameterName} with result ${resultValue}`;
```

### Styling
Recommendations use Tailwind CSS classes for consistent styling:
- Blue theme for recommendations
- Green for wellness
- Orange for traits
- Purple for AI-generated content

## Security Notes

- API key is embedded in client-side code (consider server-side implementation for production)
- Rate limiting should be implemented for production use
- User data is not stored or transmitted beyond the recommendation generation

## Performance Considerations

- Recommendations are generated on-demand
- Fallback recommendations provide instant response
- AI recommendations may take 2-5 seconds depending on API response time
- Loading states provide user feedback during generation

## Future Enhancements

- Server-side recommendation caching
- User preference learning
- Integration with health tracking apps
- Personalized recommendation history
- Export recommendations to PDF/email

## Support

For issues or questions about the recommendation system:
1. Check browser console for error messages
2. Verify API key validity
3. Test with the provided test file
4. Check network connectivity for API calls

---

**Note**: This system is designed for educational and demonstration purposes. For production use, implement proper security measures and consider server-side recommendation generation.
