import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MemberCard from "../components/MemberCard";
import { getMembersByIdShk } from "../service/MemberService";
import MemberAddModal from "../components/MemberAddModal";

const Members = () => {
  const { idShk } = useParams();
  const [members, setMembers] = useState([]);
  useEffect(() => {
    getMembersByIdShk(idShk).then((res) => setMembers(res.data));
  }, [idShk]);
  return (
    <div className="w-2/3 flex flex-col gap-10 py-20">
      <div>
        <MemberAddModal familyId={idShk} />
      </div>
      <div>
        {members.map((member) => (
          <MemberCard member={member} />
        ))}
      </div>
    </div>
  );
};

export default Members;
