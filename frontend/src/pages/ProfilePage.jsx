import React from "react";
import { useAuthStore } from "../store/useAuthStore";
const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const handleImageUpload = async (e) => {};
  return (
    <div className="h-screen pt-20">
      <div className="max-2-2xl mx-auto p-4 py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <p className="mt-2">Your profile information</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
