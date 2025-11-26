
function fetchUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: 'Tabish', role: 'Developer' });
    }, 2000);
  });
}

async function getUserInfo() {
  console.log('Fetching user data...');
  try {
    const user = await fetchUserData(1);
    console.log('User data:', user);
  } catch (error) {
    console.error('Error:', error);
  }
}

getUserInfo();
console.log('This runs immediately (non-blocking)');
