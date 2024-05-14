import { useRecoilState, useRecoilValue } from 'recoil';
import { settingsState } from 'state/settings';
import { AccentButton } from '@chainlit/react-components';
import { Box } from '@mui/material';
import SquarePenIcon from 'assets/squarePen';


const SettingsTextbox = () => {
  const [settings, setSettings] = useRecoilState(settingsState);

  return (
  <Box>
      <AccentButton
        id="new-chat-button"
        variant={settings.useMixtral ? "contained" : "outlined"}
        // onClick={handleClickOpen}
        startIcon={<SquarePenIcon />}
      >
        <div>{settings.useMixtral ? "Mixtral" : "Default"}</div>
      </AccentButton>
    </Box>
  );
    
};

export default SettingsTextbox;