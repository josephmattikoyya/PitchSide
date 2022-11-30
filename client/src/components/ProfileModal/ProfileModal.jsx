import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size={"55%"}
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your info</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="FirstName"
            placeholder="First Name"
          />
          <input
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="Occupation"
            placeholder="Occupation"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="Residence"
            placeholder="Residence"
          />
          <input
            type="text"
            className="infoInput"
            name="Status"
            placeholder="Relationship Status"
          />
        </div>

        <div>
          Profile Picture
          <input type="file" name="profileImg" />
          Cover Picture
          <input type="file" name="coverImg" />
        </div>

        <button className="button logout-button">UPDATE</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
