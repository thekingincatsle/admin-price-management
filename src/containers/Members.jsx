import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MemberCard from "../components/MemberCard";
import { getMembersByIdShk } from "../service/MemberService";

const Members = () => {
  const { idShk } = useParams();
  const [members, setMembers] = useState([]);
  useEffect(() => {
    getMembersByIdShk(idShk).then((res) => setMembers(res.data));
  }, [idShk]);
  return (
    <div className="w-2/3 flex flex-col gap-10 py-20">
      {members.map((member) => (
        <MemberCard member={member} />
      ))}
    </div>
  );
};

export default Members;
