import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import MembersList from "../components/MembersList";
import { fetchMembers } from "../actions/api";
declare const window: any;

export default function AvailabilityPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMembers());
  }, []);

  return (
    <>
      <h1>Members List</h1>
      <MembersList />
    </>
  );
}
