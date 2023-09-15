import { useCallback, useEffect, useMemo, useState } from "react";

type useModalHelpersReturn = {
  isModalOpen: boolean;
  onClose: () => void;
  onShow: () => void;
  modalBodyKey: number;
};

export const useModalHelpers = (): useModalHelpersReturn => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalBodyKey, setModalBodyKey] = useState<number>(0);

  useEffect(
    () =>
      setModalBodyKey((modalKey) =>
        modalKey === Number.MAX_VALUE ? 0 : modalKey + 1
      ),
    [isModalOpen]
  );

  const onShow = useCallback(() => setIsModalOpen(true), [setIsModalOpen]);
  const onClose = useCallback(() => setIsModalOpen(false), [setIsModalOpen]);

  return useMemo(
    () => ({
      isModalOpen,
      onClose,
      onShow,
      modalBodyKey,
    }),
    [isModalOpen, onClose, onShow, modalBodyKey]
  );
};
