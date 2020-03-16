import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { IStore, IMembers } from "../model/Members";


export default function MembersList() {
    const dispatch = useDispatch();
    // Add zoom and rotation controls to the map.

  const members: IMembers[] = useSelector((state: IStore) => state.apiState.members);
  return (



      <div className="rTable">
          <div className="rTableRow">
              <div className="rTableHead"><strong>ID</strong></div>
              <div className="rTableHead"><strong>First Name</strong></div>
              <div className="rTableHead"><strong>Surname</strong></div>
              <div className="rTableHead"><strong>Email</strong></div>
              <div className="rTableHead"><strong>Gender</strong></div>

          </div>
        {members.map((member: IMembers) => (

                <div className="rTableRow">
                    <div className="rTableCell">{member.id}</div>
                    <div className="rTableCell">{member.firstname}</div>
                    <div className="rTableCell">{member.surname}</div>
                    <div className="rTableCell">{member.email}</div>
                    <div className="rTableCell">{member.gender}</div>
                </div>

          //   <li key={member.id}>
          //       <div>{member.id}</div>
          //       <div>{member.firstname}</div>
          //       <div>{member.surname}</div>
          //       <div>{member.email}</div>
          //       <div>{member.gender}</div>
          // </li>

        ))}
      </div>
  );
}


