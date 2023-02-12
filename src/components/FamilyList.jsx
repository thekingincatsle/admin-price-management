import React, { useEffect, useState } from "react";
import { getAllFamily, deleteFamily } from "../service/FamilyService";
import { useNavigate } from "react-router-dom";
import Title from "./Title";
import FamilyAddModal from "./FamilyAddModal";
import Modal from "./Modal";

const FamilyList = () => {
  const navigate = useNavigate();
  const [families, setFamilies] = useState([]);
  useEffect(() => {
    getAllFamily().then((res) => setFamilies(res.data));
  }, []);
  async function handleConfirmDelete(family) {
    console.log(family);
    await deleteFamily(family);
    alert(`Xoá thành công hộ gia đình ${family.idSoHoKhau}`);
    window.location.reload(false);
  }
  return (
    <div className="w-full">
      <Title text="Danh sách hộ khẩu" />
      <FamilyAddModal />
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
                      Id Sổ hộ khẩu
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Địa chỉ
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Tên chủ hộ
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Danh sách thành viên
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Xoá
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {families.map((family, index) => (
                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {family.idSoHoKhau}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {family.diaChi}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {family.tenChuHo}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => {
                            navigate(`/member/${family.idSoHoKhau}`);
                          }}
                        >
                          Thành viên
                        </button>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Modal
                          text="Xoá"
                          deleteTarget={family}
                          message={`Bạn chắc chắn muốn xoá hộ gia đình ${family.idSoHoKhau} cùng tất
                          cả thành viên của hộ này?`}
                          handleConfirm={handleConfirmDelete}
                        />
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

export default FamilyList;
