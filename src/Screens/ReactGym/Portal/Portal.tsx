import { PropsWithChildren, useState } from "react";
import { ChildContainer } from "../styledReactGym";
import {
  ModalContainer,
  Overlay,
  PortalBody,
  PortalButton,
  PortalHeader,
} from "./styled-Portal";

export const Portal = () => {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => setShowModal(false);
  const onOpen = () => setShowModal(true);

  return (
    <ChildContainer>
      <PortalHeader>
        <PortalButton onClick={onOpen}>Dummy Button</PortalButton>
        <h1>React Portal</h1>
        <PortalButton onClick={onOpen}>Open Modal</PortalButton>
      </PortalHeader>

      <PortalBody>
        <Modal isModalOpen={showModal} onClose={onClose}>
          <h1>Fancy Modal</h1>
        </Modal>
        <h1>Just some dummy content</h1>
        {dummyText()}
      </PortalBody>
    </ChildContainer>
  );
};

type ModalProps = PropsWithChildren<{
  isModalOpen: boolean;
  onClose: () => void;
}>;

const Modal = (props: ModalProps) => {
  const { children, isModalOpen, onClose } = props;

  if (!isModalOpen) return null;

  return (
    <>
      <Overlay />
      <ModalContainer>
        <PortalButton onClick={onClose}>Close</PortalButton>
        {children}
      </ModalContainer>
    </>
  );
};

function dummyText() {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, alias unde!
      Natus quasi iusto amet officia tempora sit ducimus vitae repellat,
      voluptate soluta voluptatum debitis fugit numquam cum aliquam in quibusdam
      itaque. Veniam, laudantium reprehenderit, doloribus, blanditiis neque
      nesciunt explicabo dicta officiis suscipit porro quaerat aut corporis
      alias! Eos totam assumenda natus temporibus voluptas possimus iste velit
      eius, blanditiis tenetur voluptatum! Repellat cum sequi ad? Ad
      consequuntur, nihil quidem ipsam ut maxime perferendis voluptates sint
      mollitia corporis suscipit optio saepe sunt incidunt harum, officiis ipsum
      vitae eius et officia libero illo molestiae ullam iusto? Rerum
      dignissimos, voluptas possimus eligendi iure excepturi quos praesentium
      sint enim doloribus animi ducimus molestias nesciunt sit totam labore!
      Aspernatur qui exercitationem laborum ut obcaecati. Totam ab molestias,
      cupiditate, minima quaerat autem tenetur dignissimos eos aut obcaecati non
      sed culpa deleniti hic quisquam repellat animi adipisci voluptates ea.
      Eligendi dolorum sint distinctio aspernatur! Dolores assumenda a quis
      error quod modi incidunt excepturi et quam inventore eligendi laboriosam
      repellendus dolor nulla quaerat ipsam placeat, vitae eum quos minus culpa
      voluptatum quo mollitia atque? Animi veniam repellendus facere corrupti
      expedita illo distinctio nulla soluta earum! Quas nesciunt, ullam
      molestiae harum eaque atque ex minus id itaque soluta aut quam, nihil quod
      consectetur. Qui nobis quibusdam quia nostrum nihil nemo. Id neque qui
      quibusdam? Vero voluptatum similique nihil soluta, ipsum doloremque eaque
      explicabo, amet eum deleniti iste autem. Harum et voluptate, delectus
      quisquam, corrupti sequi labore sint consectetur eaque alias sunt. Velit,
      aliquid nulla earum quis optio ut nesciunt quod! Totam alias suscipit
      atque deserunt assumenda doloremque libero officia optio, quae fuga quo
      esse nihil eum dolor vitae cum eius. Delectus tenetur ullam obcaecati
      tempora voluptas saepe hic vero beatae quibusdam similique recusandae unde
      quis, nam adipisci quisquam ratione est perspiciatis ipsum cupiditate.
      Dolores rem tenetur, harum eos cumque dicta amet maiores veniam eius
      voluptas possimus molestias numquam at, exercitationem quia? Corporis
      quaerat temporibus dignissimos architecto voluptas suscipit accusantium
      provident fugit, quidem laudantium reiciendis omnis? Error culpa eaque
      eligendi? Cum necessitatibus ex laborum qui, a maiores, fugiat impedit
      asperiores dignissimos labore quas magni quidem aperiam aut quos. Quasi
      reiciendis minima placeat velit similique maxime provident repellendus
      delectus vel! Suscipit, culpa cum. Nobis qui fuga cumque mollitia amet
      fugit recusandae tempora veniam. Provident deserunt quidem eligendi illo
      molestias laudantium ipsa tenetur laboriosam doloribus illum culpa a,
      facilis, explicabo repellat inventore error nemo assumenda quae iure
      voluptatibus incidunt earum sed? Eaque suscipit dolore blanditiis
      accusamus expedita deserunt, possimus iusto ullam maxime sit fugit id,
      molestias facilis iure, vitae error dignissimos itaque nulla facere
      repellendus? Inventore natus corrupti a aut quis. Voluptatem ratione enim
      praesentium, tempore obcaecati corrupti nostrum possimus aperiam maiores
      explicabo, maxime accusamus tenetur saepe laborum hic esse suscipit
      aspernatur molestias quis sed quod. Omnis mollitia neque, rem dignissimos
      facilis fugit beatae enim debitis aut, perspiciatis veritatis aspernatur
      explicabo sint nam, earum nisi? Beatae quam, quasi nulla accusantium eius
      itaque perferendis doloribus voluptate tempora voluptatum, molestias,
      optio cupiditate neque sapiente. Tempora fugit beatae deserunt voluptatum
      sequi iste illo nesciunt dolorem?
    </p>
  );
}
