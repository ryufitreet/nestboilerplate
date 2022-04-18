# Could be needed to run twice after first error. Probably
NC='\033[0m' # No Color
echo -e "${RED}REMOVE OLD DOCKER${NC}"
sudo apt-get remove docker docker-engine docker.io containerd runc;
echo -e "${RED}APT-GET UPDATE${NC}"
sudo apt-get update;
echo -e "${RED}INSTALL BASE SOFT${NC}"
sudo apt-get install ca-certificates curl gnupg lsb-release;
sleep 3;
echo -e "${RED}PREPARE FOR DOCKER INSTALL${NC}"
#Могут быть проблемы с этой частью
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
# sudo apt-get update
sleep 5
echo -e "${RED}INSTALL DOCKER${NC}"
sudo apt-get install docker-ce docker-ce-cli containerd.io