describe("NFTMarkettest", function() {
    it("Should list another sales", async function() {
      console.log("start")
      const [_] = await ethers.getSigners()
      const address = '0x26B2DC74Aa745bd61598290C00c90e49831ADc41'
      const abiNFT = [
        "function getListingPrice() public view returns (uint256)",
        "function listToken(uint256 tokenId, uint256 price) public payable returns (bool)",
        "function mintToken(string memory tokenURI) public returns(uint)"
    ];

      const nftMarketplace = new ethers.Contract(address, abiNFT, _)
     await nftMarketplace.mintToken("https://bafybeihg4j3l43wh3dmvod7hviux6t5tjyxvaq6gszq6mdtdwa6i7nj5r4.ipfs.w3s.link/R.jfif")
      console.log("mint token1 success")
      let listingPrice = await nftMarketplace.getListingPrice()
      listingPrice = listingPrice.toString()
      const auctionPrice = ethers.utils.parseUnits('1', 'ether')
      await nftMarketplace.listToken(5, auctionPrice, { value: listingPrice })
      console.log("list token2 success")

  })
})