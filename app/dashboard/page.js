import React from 'react'

const page = () => {
    const { user } = useUser();

  useEffect(() => {
    if (user) {
      fetchUserDecks();
    }
  }, [user]);

  const fetchUserDecks = async () => {
    if (!user) return;
    const userDocRef = doc(collection(db, "users"), user.id);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      const collections = docSnap.data().flashcards || [];
      setUserDecks(collections);
    }
  };
  return (
    <div>page</div>
  )
}

export default page