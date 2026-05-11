import axios from 'axios';

const handleSubmitLocalisation = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    console.log("Submitting formData:", formData);  // Debugging line
  
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}demande`,
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );
  
      console.log('Demande envoyée avec succès:', response.data);
  
      // Move to next step or show success message
      nextStep();
    } catch (error) {
      console.error('Erreur lors de l’envoi de la demande:', error.response?.data || error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  