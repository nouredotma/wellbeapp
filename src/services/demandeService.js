import { apiClient } from './apiService';

const handleSubmitLocalisation = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    console.log("Submitting formData:", formData);
  
    try {
      const response = await apiClient.post(
        `/demande`,
        formData
      );
  
      console.log('Demande envoyée avec succès:', response.data);
  
      nextStep();
    } catch (error) {
      console.error('Erreur lors de l’envoi de la demande:', error.response?.data || error.message);
      // Even if it fails, move to next step for template view
      nextStep();
    } finally {
      setIsSubmitting(false);
    }
  };
  