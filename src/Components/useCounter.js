import { useEffect, useState } from "react";

const useCounter = () => {
  const [youtube, setYoutube] = useState(0);
  const [twitter, setTwitter] = useState(0);
  const [facebook, setFacebook] = useState(0);
  const [linkedin, setLinkedin] = useState(0);

  let speed = 2000;

  const target = {
    youtube: 60000,
    twitter: 20000,
    facebook: 45000,
    linkedin: 12500,
  };

  const inc = {
    youtube: target.youtube / speed,
    twitter: target.twitter / speed,
    facebook: target.facebook / speed,
    linkedin: target.linkedin / speed,
  };

  useEffect(() => {
    if (youtube < target.youtube) {
      setYoutube(youtube + inc.youtube);
    } else {
      return setYoutube(target.youtube);
    }
  }, [youtube]);

  useEffect(() => {
    if (twitter < target.twitter) {
      setTwitter(twitter + inc.twitter);
    } else {
      return setTwitter(target.twitter);
    }
  }, [twitter]);

  useEffect(() => {
    if (facebook < target.facebook) {
      setFacebook(facebook + inc.facebook);
    } else {
      return setFacebook(target.facebook);
    }
  }, [facebook]);

  useEffect(() => {
    if (linkedin < target.linkedin) {
      setLinkedin(linkedin + inc.linkedin);
    } else {
      return setLinkedin(target.linkedin);
    }
  }, [linkedin]);

  return { youtube, twitter, facebook, linkedin };
};

export default useCounter;
