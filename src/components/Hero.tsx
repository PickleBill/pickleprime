
  // Function to show analytics view - directly open the stats view
  const handleAnalyticsClick = () => {
    setShowShareModal(true);
    
    // Set timeout to ensure the modal is rendered before accessing its content
    setTimeout(() => {
      // Find and open the Stats view
      const statsButtons = document.querySelectorAll('button');
      const statsButton = Array.from(statsButtons).find(button => 
        button.textContent?.includes('Stats')
      );
      
      if (statsButton) {
        statsButton.click();
      }
    }, 300);
  };
