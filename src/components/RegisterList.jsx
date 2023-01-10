import React, { useState, useEffect } from "react";
import { getAllRegisterForm } from "../service/RegisterFormService";
import { useNavigate } from "react-router-dom";

const RegisterList = () => {
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState([]);
  useEffect(() => {
    getAllRegisterForm().then((res) => setRegisterForm(res.data));
  }, []);
  return (
    <div className="w-full">
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-gray-200 border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Họ và tên
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Id Sổ hộ khẩu
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Tuổi
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Trạng thái xác thực chứng nhận
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Thông tin chi tiết
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {registerForm.map((registerForm, index) => (
                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {registerForm.hocSinh.thanhVien.ten}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {registerForm.hocSinh.thanhVien.hoGiaDinh.idSoHoKhau}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {new Date().getFullYear() -
                          registerForm.hocSinh.thanhVien.namSinh}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {registerForm.trangThai}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => {
                            navigate(`/form-detail/${registerForm.id}`);
                          }}
                        >
                          Chi tiết
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterList;
